"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidarCampos_1 = require("../../middlewares/ValidarCampos");
const express_validator_1 = require("express-validator");
const Register_1 = require("../controllers/collaborator/Register");
const Read_1 = require("../controllers/collaborator/Read");
const Delete_1 = require("../controllers/collaborator/Delete");
const Update_1 = require("../controllers/collaborator/Update");
const Security_1 = require("../../middlewares/Security");
const app = (0, express_1.Router)();
app.post('/register', [Security_1.security_post,
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('cargo', 'El cargo es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('contacto', 'El contacto es obligatorio').not().isEmpty(),
    ValidarCampos_1.validarCampos], Register_1.Register);
app.post('/read', [], Read_1.Read);
app.post('/delete', [Security_1.security_post,
    (0, express_validator_1.check)("id", 'El colaborador a eliminar es obligatorio').isNumeric(),
    ValidarCampos_1.validarCampos], Delete_1.Delete);
app.post('/update', [Security_1.security_post,
    (0, express_validator_1.check)('id', 'El colaborador a editar es obligatorio').not().isEmpty(),
    ValidarCampos_1.validarCampos], Update_1.Update);
module.exports = app;
