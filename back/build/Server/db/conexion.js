"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const { Sequelize } = require('sequelize');
const DB = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_URL,
    dialect: 'mysql',
    logging: false
});
exports.default = DB;
