const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✔ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error: ", error);
  }
};

module.exports = dbConnection;
