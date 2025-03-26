/* 
  Import & Configs
  - Packages
  - dotenv file
  - required files & Methods
  - global Variables
  -  middleware
*/

// Packages
const express = require("express");
const cors = require("cors");

// dontenv file
require("dotenv").config();

// required files & Methods
const dbConnection = require("./config/db");

// global Variables
const app = express();
app.use(cors());

// middleware
app.use(express.json()); // allowing to send json data

/* 
  App Routes
  - Routing Files
  - Routes
*/

// Routing Files
const userRoutes = require("./routes/user.router.js");

app.use("/api/user", userRoutes);

// Not Found 404
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

const startServer = async () => {
  try {
    await dbConnection();
    const PORT = process.env.PORT || 3020;
    app.listen(PORT, () => {
      console.log(`🚀 Server running `);
    });
  } catch (error) {
    console.error("❌ Server Error: ", error);
  }
};

startServer();
