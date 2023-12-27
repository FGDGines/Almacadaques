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
const ReadById_1 = require("../controllers/collaborator/ReadById");
const app = (0, express_1.Router)();
app.post('/register', [Security_1.security_post,
    (0, express_validator_1.check)('nombre_es', 'El nombre_es es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('cargo_es', 'El cargo_es es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('descripcion_es', 'La descripcion_es es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('nombre_en', 'El nombre_en es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('cargo_en', 'El cargo_en es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('descripcion_en', 'La descripcion_en es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('nombre_cat', 'El nombre_cat es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('cargo_cat', 'El cargo_cat es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('descripcion_cat', 'La descripcion_cat es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('contacto', 'El contacto es obligatorio').not().isEmpty(),
    ValidarCampos_1.validarCampos], Register_1.Register);
app.post('/read', [
    (0, express_validator_1.check)('lang', 'El idioma es obligatorio').not().isEmpty(),
], Read_1.Read);
app.post('/readbyid', [
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty(),
], ReadById_1.ReadById);
app.post('/delete', [Security_1.security_post,
    (0, express_validator_1.check)("id", 'El colaborador a eliminar es obligatorio').isNumeric(),
    ValidarCampos_1.validarCampos], Delete_1.Delete);
app.post('/update', [Security_1.security_post,
    (0, express_validator_1.check)('id', 'El colaborador a editar es obligatorio').not().isEmpty(),
    ValidarCampos_1.validarCampos], Update_1.Update);
module.exports = app;
