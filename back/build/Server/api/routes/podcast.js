"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidarCampos_1 = require("../../middlewares/ValidarCampos");
const express_validator_1 = require("express-validator");
const Security_1 = require("../../middlewares/Security");
const Register_1 = require("../controllers/podcast/Register");
const Read_1 = require("../controllers/podcast/Read");
const Delete_1 = require("../controllers/podcast/Delete");
const Update_1 = require("../controllers/podcast/Update");
const app = (0, express_1.Router)();
app.post('/register', [Security_1.security_post,
    (0, express_validator_1.check)('url', 'La url es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('titulo', 'El titulo es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('autor', 'El autor es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('fecha', 'La fecha es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('categoria', 'La categoria es obligatoria').not().isEmpty(),
    ValidarCampos_1.validarCampos], Register_1.Register);
app.post('/read', [], Read_1.Read);
app.post('/delete', [Security_1.security_post,
    (0, express_validator_1.check)("id", 'El podcast a eliminar es obligatorio').isNumeric(),
    ValidarCampos_1.validarCampos], Delete_1.Delete);
app.post('/update', [Security_1.security_post,
    (0, express_validator_1.check)('id', 'El podcast a editar es obligatorio').not().isEmpty(),
    ValidarCampos_1.validarCampos], Update_1.Update);
module.exports = app;
