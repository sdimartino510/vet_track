const router = require("express").Router();

router.route("/login").post((req, res) => {
  console.log("req.body", req.body);
});

module.exports = router;
