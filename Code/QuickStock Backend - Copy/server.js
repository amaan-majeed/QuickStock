const dotenv = require("dotenv").config();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const userRoute = require("./routes/userRoute")
const productRoute = require("./routes/productRoute")
const errorHandler = require('./Middleware/errorMiddleware')
const cookieParser = require("cookie-parser")

const app = express();

// Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false })) // handle data coming from URL
app.use(bodyParser.json())
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true
  })
);

// Routes Middleware
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);


// Routes
app.get('/', (req, res) => {
    res.send("Home Page")
})

// Error Handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on Port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
