const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://user:1234@cluster0.gclpy.mongodb.net/EShop?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Backend server is running!");
});
