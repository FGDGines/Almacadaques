"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidarCampos_1 = require("../../middlewares/ValidarCampos");
const Security_1 = require("../../middlewares/Security");
const express_validator_1 = require("express-validator");
const Create_1 = require("../controllers/calendar_event/Create");
const Read_1 = require("../controllers/calendar_event/Read");
const Delete_1 = require("../controllers/calendar_event/Delete");
const Update_1 = require("../controllers/calendar_event/Update");
const app = (0, express_1.Router)();
app.post('/create', [Security_1.security_post,
    (0, express_validator_1.check)('titulo', 'El titulo es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('inicio', 'La fecha de inicio es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('final', 'La fecha final es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('enlace', 'El enlace es obligatorio').not().isEmpty(),
    ValidarCampos_1.validarCampos], Create_1.Create);
app.post('/read', [], Read_1.Read);
app.post('/delete', [Security_1.security_post,
    (0, express_validator_1.check)('id', 'El id a eliminar es obligatorio').isNumeric(),
    ValidarCampos_1.validarCampos], Delete_1.Delete);
app.post('/update', [
    (0, express_validator_1.check)('id', 'El id del calendar event a actualizar es obligatorio').isNumeric(),
    ValidarCampos_1.validarCampos
], Update_1.Update);
module.exports = app;
