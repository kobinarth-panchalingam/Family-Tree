const relationships_model = require("../models/relationship.model");

exports.getAllRelationships = (req, res) => {
  relationships_model.getAllRelationships((err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: "0 relationships" });
      } else {
        res.status(500).send({ message: "0 relationships" });
      }
    } else {
      res.send(data);
    }
  });
};
