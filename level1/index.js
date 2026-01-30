const express = require("express");
const app = express();

// routes
const studentRoutes = require("./routes/studentRoutes");

// middlewares
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const PORT = 3000;

// parse JSON body
app.use(express.json());

// request logger
app.use(logger);

// routes
app.use("/students", studentRoutes);

// global error handler (always last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
