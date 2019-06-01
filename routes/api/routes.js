const router = require("express").Router();
const user = require("../../model/user");

router.route("/api/login").post((req, res) => {
  console.log("req.body", req.body);
  res.status(200).json({ result: "success" });
});
router.route("/api/profile").post((req, res) => {
  console.log("req.body - profile", req.body);
  res.status(200).json({ result: "success" });
});

module.exports = router;
