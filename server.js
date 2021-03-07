require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const helmet = require("helmet");
const path = require("path");
const app = express();

app.use(helmet());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/workout",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

// API routes need to load first. Order matters because of Switch Statements used in routing.
// This was a design decision that I decided to go with, just because I like it 🤷🏽‍♂️
require("./routes/api.js")(app);
require("./routes/pages.js")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is listening on: ${PORT} - http://localhost:${PORT}`);
});
