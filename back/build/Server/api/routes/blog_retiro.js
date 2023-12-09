"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidarCampos_1 = require("../../middlewares/ValidarCampos");
const Security_1 = require("../../middlewares/Security");
const express_validator_1 = require("express-validator");
const Create_1 = require("../controllers/blog_retiro/Create");
const Read_1 = require("../controllers/blog_retiro/Read");
const Delete_1 = require("../controllers/blog_retiro/Delete");
const Update_1 = require("../controllers/blog_retiro/Update");
const AddFile_1 = require("../controllers/blog_retiro/AddFile");
const ReadById_1 = require("../controllers/blog_retiro/ReadById");
const app = (0, express_1.Router)();
app.post('/create', [Security_1.security_post,
    (0, express_validator_1.check)('title_es', 'El titulo en español es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('title_en', 'El titulo en ingles es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('title_cat', 'El titulo en catalan es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('description_es', 'La descripcion en español es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('description_en', 'La descripcion en ingles es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('description_cat', 'La descripcion en catalan es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('index', 'El indice es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('day', 'El dia es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('month', 'El mes es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('year', 'El  año es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('author', 'El autor es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('estado', 'El estado es obligatorio').not().isEmpty(),
    ValidarCampos_1.validarCampos], Create_1.Create);
app.post('/read', [
    (0, express_validator_1.check)('lang', 'El lenguaje es obligatorio').not().isEmpty()
], Read_1.Read);
app.post('/readbyid', [
    (0, express_validator_1.check)('id', 'El id es obligatorio').not().isEmpty()
], ReadById_1.ReadById);
app.post('/delete', [Security_1.security_post,
    (0, express_validator_1.check)('id', 'El blog retiro a eliminar es olbigatorio').isNumeric(),
    ValidarCampos_1.validarCampos], Delete_1.Delete);
app.post('/update', [Security_1.security_post,
    (0, express_validator_1.check)('id', 'El blog retiro a actualizar es obligatorio').isNumeric(),
    ValidarCampos_1.validarCampos], Update_1.Update);
app.post('/add_file', [Security_1.security_post,
    (0, express_validator_1.check)('id', 'El blog retiro a actualizar es olbigatorio').isNumeric(),
    ValidarCampos_1.validarCampos], AddFile_1.AddFile);
module.exports = app;
