import { Router } from "express";
import { validarCampos } from "../../middlewares/ValidarCampos";
import { security_post } from "../../middlewares/Security";
import { Create } from "../controllers/testimony/Create";
import { check } from "express-validator";
import { Delete } from "../controllers/testimony/Delete";
import { Update } from "../controllers/testimony/Update";
import { Read } from "../controllers/testimony/Read";
import { ReadById } from "../controllers/testimony/ReadByID";

const app = Router()

app.post('/create' , [security_post  ,
    check('witness', 'El nombre del testigo es obligatorio').not().isEmpty(),
    check('testimony_es','El testomonio en español es obligatorio').not().isEmpty(),
    check('testimony_en','El testomonio en ingles es obigatorio').not().isEmpty(),
    check('testimony_cat','El testomonio en catalan es obligatorio').not().isEmpty()
    , validarCampos] , Create)

app.post('/update', [security_post ,
    check('id', 'El testimonio a editar es obligatorio').not().isEmpty()
     , validarCampos] , Update)

app.post('/delete', [security_post , 
    check('id','El testimonio a eliminar es obligatorio').isNumeric()
     , validarCampos] , Delete)

app.post('/read',[
    check('lang', "El idioma es obligatorio").not().isEmpty(), 
    validarCampos] ,Read)

app.post('/readbyid',[
    check('id', "El id es obligatorio").not().isEmpty(), 
    validarCampos] ,ReadById)
module.exports = app