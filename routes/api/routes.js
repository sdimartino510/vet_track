const router = require("express").Router();

router.route("/").get("../../views/index.html");

module.exports = router;
