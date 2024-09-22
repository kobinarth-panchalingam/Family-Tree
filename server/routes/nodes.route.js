const express = require("express");
const router = express.Router();
const nodesController = require("../controllers/nodes.controller");

router.get("/", nodesController.getAllNodes);

module.exports = router;
