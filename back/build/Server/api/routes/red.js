"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidarCampos_1 = require("../../middlewares/ValidarCampos");
const express_validator_1 = require("express-validator");
const Create_1 = require("../controllers/red/Create");
const Delete_1 = require("../controllers/red/Delete");
const Read_1 = require("../controllers/red/Read");
const Update_1 = require("../controllers/red/Update");
const app = (0, express_1.Router)();
app.post('/create', [
    (0, express_validator_1.check)('url', 'La url es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('cuenta', 'La cuenta es obligatoria').not().isEmpty(),
    ValidarCampos_1.validarCampos
], Create_1.Create);
app.post('/read', [], Read_1.Read);
app.post('/delete', [
    (0, express_validator_1.check)("id", 'El id de la red a eliminar es obligatorio').isNumeric(),
    ValidarCampos_1.validarCampos
], Delete_1.Delete);
app.post('/update', [
    (0, express_validator_1.check)("id", 'El id de la red a editar es obligatorio').isNumeric(),
    ValidarCampos_1.validarCampos
], Update_1.Update);
module.exports = app;
