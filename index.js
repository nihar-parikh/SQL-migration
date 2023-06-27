const express = require("express");
let bodyParser = require("body-parser");
require("./models");
const userController = require("./controllers/userController");

const app = express();

const port = 8000;

app.use(bodyParser.json());

app.post("/api/v1/user/create", userController.addUser);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
