const persons_model = require("../models/persons.model");

exports.getAllPersons = (req, res) => {
  persons_model.getAllPersons((err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: "0 persons" });
      } else {
        res.status(500).send({ message: "0 customers" });
      }
    } else {
      res.send(data);
    }
  });
};
