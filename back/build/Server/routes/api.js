"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = (0, express_1.Router)();
app.use('/mail', require('../api/routes/mail'));
app.use('/auth', require('../api/routes/auth'));
app.use('/testimony', require('../api/routes/testimony'));
module.exports = app;
