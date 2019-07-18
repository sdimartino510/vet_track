#!/usr/bin/env python
#
# Sample server.
#
import os
import sys
import signal
import logging

from tornado import httpserver, netutil, ioloop, web
from motor.motor_tornado import MotorClient

logger = logging.getLogger()

class LoginHandler(web.RequestHandler):

    def get(self):
        self.write({'status': 'OK'})
        self.finish()


class VetServer(object):
    """Implement the startup/shutdown details of the Vet backend."""
    
    def __init__(self, port=None, add_signal_handler=False):
        self.port = port or 8080

        # Don't initialize the IOLoop until it is time to start.
        self._ioloop = None
        self._shutdown_hooks = []

    @property
    def ioloop(self):
        return self._ioloop
    
    def add_shutdown_hook(hook):
        self._shutdown_hooks.append(hook)
    
    def create_server(self, app, port, unix_socket=None):
        server = httpserver.HTTPServer(app)
    
        # NOTE: sockets is actually an array of diffent sockets.
        # This is because we can bind to an IPv4 socket, or an IPv6
        # socket, so we should listen on both.
        sockets = netutil.bind_sockets(port)
        server.add_sockets(sockets)
        logger.info("Listening on port: %d", port)

        # Bind to a UNIX socket too. Sergio, don't worry about
        # this step for now; it is just a convenience for debugging.
        # In the future, if this were to scale, then this allows for
        # connecting to an explicit server instance more easily.
        if unix_socket:
            unix_path = '/tmp/vet.server.{}'.format(os.getpid())
            socket = netutil.bind_unix_socket(unix_path)
            server.add_socket(socket)
            logger.info("Listening on UNIX socket: %s", unix_path)

            # Clean up the socket by adding it as a shutdown hook.
            def _cleanup_socket():
                try:
                    os.remove(unix_path)
                except Exception:
                    # Ignore any exceptions by doing nothing.
                    pass
            self.add_shutdown_hook(_cleanup_socket)

        # Finally, start the server. This only sets up these sockets
        # to listen on the current IOLoop; it does not actually start
        # the server. That happens when the IOLoop itself is started.
        server.start()

    def run(self):
        # Create the service.
        app = web.Application([
            (r'/', LoginHandler),
        ])
        
        # Bind the service to listen on different sockets.
        self.create_server(app, self.port)

        # Start the IOLoop (event loop).
        self._ioloop = ioloop.IOLoop.current()
        self.ioloop.start()

        # self.ioloop.start() will exit during server shutdown.
        # So, we should put our cleanup code here.
        for hook in self._shutdown_hooks:
            try:
                hook()
            except Exception as exc:
                logger.exception("Error running shutdown hook")

		# Since we've executed the shutdown hooks, we should clear them.
        self._shutdown_hooks = []
    
    def stop(self, from_signal=False):
        # Call IOLoop.stop(), but on the ioloop itself.
        if from_signal:
            self.ioloop.add_callback_from_signal(self.ioloop.stop)
        else:
            self.ioloop.add_callback(self.ioloop.stop)

        logger.info("Shutting down")

def main(port=None):
    print("PID : {}".format(os.getpid()))
    print("Port: {}".format(port))
    # Setup the logger.
    handler = logging.StreamHandler(stream=sys.stdout)
    handler.setLevel(logging.INFO)
    logger.addHandler(handler)

    port = port or 8080
    server = VetServer(port)
    
    # Setup the signal handler.
    def _handler(signum, frame):
        server.stop(from_signal=True)

    signal.signal(signal.SIGINT, _handler)
    signal.signal(signal.SIGTERM, _handler)

    server.run()

if __name__ == "__main__":
    main()

