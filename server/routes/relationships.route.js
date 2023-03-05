const express = require("express");
const router = express.Router();
const relationships_controller = require("../controllers/relationships.controller");

router.get("/getAllRelationships", relationships_controller.getAllRelationships);

module.exports = router;
