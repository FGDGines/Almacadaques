import { Router } from "express";
import { validarCampos } from "../../middlewares/ValidarCampos";
import { security_post } from "../../middlewares/Security";
import { Create } from "../controllers/testimony/Create";
import { check } from "express-validator";
import { Delete } from "../controllers/testimony/Delete";

const app = Router()

app.post('/create' , [security_post  ,
    check('witness', 'El nombre del testigo es obligatorio').not().isEmpty(),
    check('testimony_es','El testomonio en español es obligatorio').not().isEmpty(),
    check('testimony_en','El testomonio en ingles es obigatorio').not().isEmpty(),
    check('testimony_cat','El testomonio en catalan es obligatorio').not().isEmpty()
    , validarCampos] , Create)

app.post('/delete', [security_post , 
    check('id','El testimonio a eliminar es obligatorio').isNumeric()
     , validarCampos] , Delete)

module.exports = app