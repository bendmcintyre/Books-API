const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const booksController = require("./controllers/books_controller.js");
app.use("/books", booksController);

app.listen(PORT, () => {
  console.log("Greetings! From port: ", PORT);
});
