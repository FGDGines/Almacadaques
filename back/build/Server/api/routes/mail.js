"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Create_1 = require("../controllers/mail/Create");
const ValidarCampos_1 = require("../../middlewares/ValidarCampos");
const express_validator_1 = require("express-validator");
const Read_1 = require("../controllers/mail/Read");
const Delete_1 = require("../controllers/mail/Delete");
const app = (0, express_1.Router)();
app.post('/create', [
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('correo', 'Debe proporcionar un correo valido').isEmail(),
    (0, express_validator_1.check)('msg', 'El texto del mensaje es pbligatorio').not().isEmpty(),
    (0, express_validator_1.check)('fragment', 'La seccion del sitio web debe ser identificada').not().isEmpty(),
    ValidarCampos_1.validarCampos
], Create_1.Create);
app.post('/read', [
    (0, express_validator_1.check)('deleted', 'De indicar si desea ver los elementos eliminados o no').isNumeric(),
    ValidarCampos_1.validarCampos
], Read_1.Read);
app.post('/delete', [
    (0, express_validator_1.check)("id", 'El ID del mensaje a eliminar es obligatorio').isNumeric(),
    ValidarCampos_1.validarCampos
], Delete_1.Delete);
module.exports = app;
