"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Register_1 = require("../controllers/auth/Register");
const ValidarCampos_1 = require("../../middlewares/ValidarCampos");
const express_validator_1 = require("express-validator");
const Login_1 = require("../controllers/auth/Login");
const app = (0, express_1.Router)();
app.post('/register', [(0, express_validator_1.check)('correo', 'Debe proporcionar un correo valido').isEmail(),
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password')
        .not().isEmpty().withMessage('La contraseña es obligatoria')
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/, "i").withMessage('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial'),
    ValidarCampos_1.validarCampos], Register_1.Register);
app.post('/login', [
    (0, express_validator_1.check)('correo', 'El nombre de usuario es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'La contraseña es obligatoria').not().isEmpty(),
    ValidarCampos_1.validarCampos
], Login_1.Login);
module.exports = app;
