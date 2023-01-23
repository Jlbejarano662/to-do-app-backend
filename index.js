
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config({ path: '.env'});


const app = express();
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 3030

const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  /* useFindAndModify: false, */
};

app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGODB_URI, connectionOptions)
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log("The server is listening on port " + PORT);
});
