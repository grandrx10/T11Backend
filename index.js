const express = require("express");
const routes = require("./routes");

const app = express();

const cors = require("cors");
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(cors({
    origin: FRONTEND_URL, // Replace with your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true // Enable if using cookies/auth headers
  }));

app.use(express.json());
app.use('', routes);

module.exports = app;