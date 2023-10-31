const express = require("express");
const dotenv = require("dotenv")
const bodyParser = require("body-parser");
const mongoose = require ("mongoose");

dotenv.config();

const port = process.env.PORT || 8080;
const app = express();
const moviesRoute = require('./routes/movieRoutes');

app.use(bodyParser.json());
app.use('/moviees', moviesRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`Connected to MongoDB`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

app.get('/', (req, res) => {
  res.send(`The server running on port ${port} welcomes you.`);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
