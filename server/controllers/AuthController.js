module.exports = {
  home: (req, res) => {
    console.log("req.body", req.body);
  },
  register: (req, res) => {
    console.log("req.body", req.body);
  },
  doRegister: (req, res) => {},
  login: (req, res) => {},
  doLogin: (req, res) => {
    console.log("req.body", req.body);
    res.status(200).json({ result: "success" });
  },
  logout: (req, res) => {}
};
