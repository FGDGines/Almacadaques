"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidarCampos_1 = require("../../middlewares/ValidarCampos");
const Security_1 = require("../../middlewares/Security");
const Create_1 = require("../controllers/testimony/Create");
const express_validator_1 = require("express-validator");
const Delete_1 = require("../controllers/testimony/Delete");
const Update_1 = require("../controllers/testimony/Update");
const Read_1 = require("../controllers/testimony/Read");
const app = (0, express_1.Router)();
app.post('/create', [Security_1.security_post,
    (0, express_validator_1.check)('witness', 'El nombre del testigo es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('testimony_es', 'El testomonio en español es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('testimony_en', 'El testomonio en ingles es obigatorio').not().isEmpty(),
    (0, express_validator_1.check)('testimony_cat', 'El testomonio en catalan es obligatorio').not().isEmpty(),
    ValidarCampos_1.validarCampos], Create_1.Create);
app.post('/update', [Security_1.security_post,
    (0, express_validator_1.check)('id', 'El testimonio a editar es obligatorio').not().isEmpty(),
    ValidarCampos_1.validarCampos], Update_1.Update);
app.post('/delete', [Security_1.security_post,
    (0, express_validator_1.check)('id', 'El testimonio a eliminar es obligatorio').isNumeric(),
    ValidarCampos_1.validarCampos], Delete_1.Delete);
app.post('/read', [
    (0, express_validator_1.check)('lang', "El idioma es obligatorio").not().isEmpty(),
    ValidarCampos_1.validarCampos
], Read_1.Read);
module.exports = app;
