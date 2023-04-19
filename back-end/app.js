var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var user_tasksRouter = require('./routes/user_tasks');
var tasksRouter = require('./routes/tasks');
const mslRouter = require('./routes/msl');
const tagsRouter = require('./routes/tags');
var cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config({ path: '../.env' });

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/tasks', tasksRouter);
app.use('/msl', mslRouter);
app.use('/tags', tagsRouter);
app.use('/user_tasks', user_tasksRouter);

module.exports = app;
