const express = require("express");
const router = express.Router();
const persons_controller = require("../controllers/persons.controller");

router.get("/getAllPersons", persons_controller.getAllPersons);

module.exports = router;
