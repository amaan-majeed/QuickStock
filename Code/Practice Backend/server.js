require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workout");

// Express app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
// app.get('/', (req, res) => {
//     res.json({msg: 'Welcome to the app'})
// })
app.use("/api/workouts", workoutRoutes);

// Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for request
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & Listening on Port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
