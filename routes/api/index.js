const router = require("express").Router();
const routes = require("./routes");

// routes
router.use("/routes", routes);

module.exports = router;
