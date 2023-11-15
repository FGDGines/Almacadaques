"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCampos = void 0;
const express_validator_1 = require("express-validator");
const validarCampos = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const msg = errors.array()[0].msg; // Cambiamos errors.errors a errors.array()
        return res.status(200).json({ status: '400', msg, errors: errors.array() }); // Cambiamos 200 a 400
    }
    next();
    return;
};
exports.validarCampos = validarCampos;
