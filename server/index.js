const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
dotenv.config();

const persons_route = require("./routes/persons.route");
const relationships_route = require("./routes/relationships.route");
const nodes_route = require("./routes/nodes.route");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/api/persons", persons_route);
app.use("/api/relationships", relationships_route);
app.use("/api/nodes", nodes_route);
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
