"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Create_1 = require("../controllers/carousel/Create");
const ValidarCampos_1 = require("../../middlewares/ValidarCampos");
const Security_1 = require("../../middlewares/Security");
const express_validator_1 = require("express-validator");
const Read_1 = require("../controllers/carousel/Read");
const Delete_1 = require("../controllers/carousel/Delete");
const app = (0, express_1.Router)();
app.post('/create', [Security_1.security_post,
    (0, express_validator_1.check)('frase_es', 'La frase en español es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('frase_en', 'La frase en ingles es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('frase_cat', 'La frase en catalan es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('fileExtension', 'La extencion del archivo es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('autor', 'El nombre del autor es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('link_autor', 'El link del autor es obligatorio').not().isEmpty(),
    ValidarCampos_1.validarCampos], Create_1.Create);
app.post('/read', [
    (0, express_validator_1.check)('lang', 'El idioma es obligatorio').not().isEmpty(),
    ValidarCampos_1.validarCampos
], Read_1.Read);
app.post('/delete', [Security_1.security_post,
    (0, express_validator_1.check)('id', 'El carousel item a eliminar es olbigatorio').isNumeric(),
    ValidarCampos_1.validarCampos], Delete_1.Delete);
module.exports = app;
