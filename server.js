const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// require routes
const publicRoutes = require("./routes/public-routes.js");
const workoutRoutes = require("./routes/workout-routes.js");
// use routes
app.use(publicRoutes, workoutRoutes);

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`));
