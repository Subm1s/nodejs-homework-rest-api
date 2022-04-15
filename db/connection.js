const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

const connectMongo = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return console.log("Database connection successful");
  } catch (err) {
    console.log("Failed to connect to database");
    process.exit(1);
  }
};

module.exports = {
  connectMongo,
};
