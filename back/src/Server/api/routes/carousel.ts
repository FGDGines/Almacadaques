import { Router } from "express";
import { Create } from "../controllers/carousel/Create";
import { validarCampos } from "../../middlewares/ValidarCampos";
import { security_post } from "../../middlewares/Security";
import { check } from "express-validator";
import { Read } from "../controllers/carousel/Read";
import { Delete } from "../controllers/carousel/Delete";
import { Update } from "../controllers/carousel/Update";

const app = Router()

app.post('/create', [security_post,
    check('frase_es','La frase en español es obligatoria').not().isEmpty(), 
    check('frase_en','La frase en ingles es obligatoria').not().isEmpty(), 
    check('frase_cat','La frase en catalan es obligatoria').not().isEmpty(), 
    check('fileExtension','La extencion del archivo es obligatoria').not().isEmpty(),
    check('autor', 'El nombre del autor es obligatorio').not().isEmpty(), 
    check('link_autor', 'El link del autor es obligatorio').not().isEmpty()
     , validarCampos], Create)

app.post('/read', [
    check('lang', 'El idioma es obligatorio').not().isEmpty(),
    validarCampos], Read)

app.post('/delete' , [security_post ,
    check('id', 'El carousel item a eliminar es olbigatorio').isNumeric()
     , validarCampos], Delete)


app.post('/update' , [
    check('id', 'El id del carosuel a eliminar es obligatorio').isNumeric()
     , validarCampos] , Update)

module.exports = app