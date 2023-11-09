"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = (0, express_1.Router)();
app.use('/mail', require('../api/routes/mail'));
app.use('/auth', require('../api/routes/auth'));
app.use('/testimony', require('../api/routes/testimony'));
<<<<<<< HEAD
=======
app.use('/carousel', require('../api/routes/carousel'));
>>>>>>> 1955cb35f018a4e1899049395c6cbad17a288276
module.exports = app;
