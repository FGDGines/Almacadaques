"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidarCampos_1 = require("../../middlewares/ValidarCampos");
const express_validator_1 = require("express-validator");
const Security_1 = require("../../middlewares/Security");
const Register_1 = require("../controllers/text_libro/Register");
const Read_1 = require("../controllers/text_libro/Read");
const Delete_1 = require("../controllers/text_libro/Delete");
const Update_1 = require("../controllers/text_libro/Update");
const app = (0, express_1.Router)();
app.post('/register', [Security_1.security_post,
    (0, express_validator_1.check)('title', 'El titulo es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('subtitle', 'El subtitulo es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('content', 'El contenido es obligatorio').not().isEmpty(),
    ValidarCampos_1.validarCampos], Register_1.Register);
app.post('/read', [], Read_1.Read);
app.post('/delete', [Security_1.security_post,
    (0, express_validator_1.check)("id", 'El text libro a eliminar es obligatorio').isNumeric(),
    ValidarCampos_1.validarCampos], Delete_1.Delete);
app.post('/update', [Security_1.security_post,
    (0, express_validator_1.check)('id', 'El text libro a editar es obligatorio').not().isEmpty(),
    ValidarCampos_1.validarCampos], Update_1.Update);
module.exports = app;
