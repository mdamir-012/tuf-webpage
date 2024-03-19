const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://mdamir4298:mdamir4298@cluster0.amf5oao.mongodb.net/tufdb"
);

module.exports = { connection };
