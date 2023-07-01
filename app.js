const express = require("express");
const morgan = require("morgan");
const userRoutes = require("./routes/users");
const todoRoutes = require("./routes/todos");
const app = express(); //access express to handle backend

app.use(express.json());
app.use(morgan("combined")); // shows HTTP reequest type , simplifies process of logging request to app
app.use("/users", userRoutes); //for every single route that uses route, we are gonna use /users
app.use("/todos", todoRoutes);

module.exports = app;