const express = require("express");
const cors = require("cors"); // <-- Added cors
const app = express();
const Car = require('./models/carModel');
const port = process.env.PORT || 5000;
const dbConnection = require('./db');
const path = require("path");

// Middleware
app.use(cors()); // <-- Allow all origins
app.use(express.json());

// Routes
app.use("/api/cars/", require("./routes/carsRoute"));
app.use("/api/users/", require("./routes/usersRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));

// Deployment setup
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`));
