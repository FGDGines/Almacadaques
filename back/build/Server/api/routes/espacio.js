"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidarCampos_1 = require("../../middlewares/ValidarCampos");
const express_validator_1 = require("express-validator");
const Create_1 = require("../controllers/espacio/Create");
const Read_1 = require("../controllers/espacio/Read");
const Delete_1 = require("../controllers/espacio/Delete");
const Update_1 = require("../controllers/espacio/Update");
const Security_1 = require("../../middlewares/Security");
const app = (0, express_1.Router)();
app.post('/create', [Security_1.security_post,
    (0, express_validator_1.check)('text_es', 'El texto en español es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('text_en', 'El texto en ingles es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('text_cat', 'El texto en catalan es obligatoria').not().isEmpty(),
    ValidarCampos_1.validarCampos], Create_1.Create);
app.post('/read', [
    (0, express_validator_1.check)('lang', 'El idioma es obligatorio').not().isEmpty(),
    ValidarCampos_1.validarCampos
], Read_1.Read);
app.post('/delete', [Security_1.security_post,
    (0, express_validator_1.check)("id", 'El espacio eliminar es obligatorio').isNumeric(),
    ValidarCampos_1.validarCampos], Delete_1.Delete);
app.post('/update', [Security_1.security_post,
    (0, express_validator_1.check)('id', 'El espacio a editar es obligatorio').isNumeric(),
    ValidarCampos_1.validarCampos], Update_1.Update);
module.exports = app;
