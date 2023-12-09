"use strict";
const Server = require('./Server/models/Server');
require('dotenv').config();
const app = new Server(process.env.PORT);
