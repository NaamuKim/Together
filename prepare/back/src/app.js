const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes");
const { notFound, errorHandler } = require("./errors/handlers");

const app = express();

app.use(
  process.env.NODE_ENV === "development" ? morgan("dev") : morgan("combined")
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(router);
g;
app.use(notFound);
app.use(errorHandler);

module.exports = app;
