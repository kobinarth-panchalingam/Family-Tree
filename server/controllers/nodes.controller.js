const personsModel = require("../models/persons.model");
const relationshipModel = require("../models/relationship.model");

exports.getAllNodes = async (req, res) => {
  nodes = {};
  let persons = null;
  let relationships = null;

  try {
    persons = await personsModel.find({}, { _id: 0 }).lean();
    relationships = await relationshipModel.find({}, { _id: 0 }).lean();
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error retrieving data" });
  }

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
    res.json(Object.values(nodes));
  }
};
