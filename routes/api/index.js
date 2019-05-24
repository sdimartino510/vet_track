const routes = require("express").Router();
const routes = require("./routes");
const User = require('../model/user');

// routes
router.use(routes);

module.exports = router;
