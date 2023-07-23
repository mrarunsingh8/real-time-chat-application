const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

module.exports = mongoose.connect("mongodb://0.0.0.0:27017/chat-app");