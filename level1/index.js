const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const app = express();

const PORT = 3000;
const studentRoutes = require("./routes/studentRoutes");

app.listen(PORT, () => {
    console.log("Server Runnning Successfully");
})