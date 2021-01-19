const Mongoose = require("mongoose");

const uriold = "mongodb://127.0.0.1:27017/triviaDB";
const uri = process.env.MONGODB_URI;

Mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = Mongoose.connection;
connection.once("open", function(error) {
  if (error) {
    console.log(error + " :this is a DB error here");
  } else {
    console.log("connection established for trivia");
  }
});

module.exports = Mongoose;
