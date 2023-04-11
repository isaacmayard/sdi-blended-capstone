var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var tasksRouter = require("./routes/tasks");
const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "./.env" });
console.log(process.env.CONNECTION_STRING);
const sequelize = new Sequelize(process.env.CONNECTION_STRING);

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);

module.exports = app;