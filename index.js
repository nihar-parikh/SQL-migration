const express = require("express");
let bodyParser = require("body-parser");
require("./models");
const userController = require("./controllers/userController");
const imageController = require("./controllers/imageController");
const commentController = require("./controllers/commentController");

const app = express();

const port = 8000;

app.use(bodyParser.json());

app.post("/api/v1/user/create", userController.addUser);

app.post("/api/v1/image/add", imageController.addImage);
app.get("/api/v1/image/all", imageController.getAllImages);

app.post("/api/v1/comment/add", commentController.addComment);
app.get("/api/v1/comment/all", commentController.getAllComments);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
