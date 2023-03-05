const express = require("express");
const router = express.Router();
const nodes_controller = require("../controllers/nodes.controller");

router.get("/getAllNodes", nodes_controller.getAllNodes);

module.exports = router;
