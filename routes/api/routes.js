const router = require("express").Router();

router.route("/login").post((req, res) => {
  console.log("req.body", req.body);
  res.status(200).json({ result: "success" });
});

module.exports = router;
