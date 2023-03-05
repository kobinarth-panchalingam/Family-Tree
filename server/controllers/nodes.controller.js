const persons_model = require("../models/persons.model");
const relationships_model = require("../models/relationship.model");
let persons = null;
let relationships = null;
nodes = {};
exports.getAllNodes = (req, res) => {
  relationships_model.getAllRelationships((err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: "0 relationships" });
      } else {
        res.status(500).send({ message: "0 relationships" });
      }
    } else {
      relationships = data;
    }
  });

  persons_model.getAllPersons((err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: "0 persons" });
      } else {
        res.status(500).send({ message: "0 customers" });
      }
    } else {
      persons = data;
    }
  });

  if (persons && relationships) {
    persons.forEach((person) => {
      if (person.gender === "m") {
        person.gender = "male";
      } else {
        person.gender = "female";
      }
      person.img = person.image;
      delete person.image;
      nodes[person.id] = person;
    });
    relationships.forEach((relation) => {
      if (relation.type === "spouse") {
        nodes[relation.target_id].pids = [relation.source_id];
        nodes[relation.source_id].pids = [relation.target_id];
      } else if (relation.type === "father") {
        nodes[relation.target_id].fid = relation.source_id;
      } else {
        nodes[relation.target_id].mid = relation.source_id;
      }
    });
  }
  console.log(relationships);
  res.send(Object.values(nodes));
  // re s.send(persons);
};
