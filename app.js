const express = require("express");
const cors = require("cors");
const router = require("./routes/index.js");
const app = express();
const port = 3000;

const errorHandler = (error, req, res, next) => {
  // Error handling middleware functionality
  console.log("DEU ERRO");
  console.table(error);
  console.log(`error ${error.message}`); // log the error
  const status = error.status || 400;
  // send back an easily understandable error message to the caller
  res.status(status).send(error.message);
};

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`API is listening on port ${port}`);
});
