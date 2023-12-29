import { Router } from "express";
import { validarCampos } from "../../middlewares/ValidarCampos";
import { security_post } from "../../middlewares/Security";
import { check } from "express-validator";
import { Create } from "../controllers/calendar_event/Create";
import { Read } from "../controllers/calendar_event/Read";
import { Delete } from "../controllers/calendar_event/Delete";
import { Update } from "../controllers/calendar_event/Update";
const app = Router()

app.post('/create', [security_post,
    check('titulo','El titulo es obligatorio').not().isEmpty(), 
    check('inicio','La fecha de inicio es obligatoria').not().isEmpty(), 
    check('final','La fecha final es obligatoria').not().isEmpty(), 
    check('descripcion','La descripcion es obligatoria').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty()
    // check('enlace', 'El enlace es obligatorio').not().isEmpty()
     , validarCampos], Create)

app.post('/read', [
    ], Read)

app.post('/delete' , [security_post,
    check('id', 'El id a eliminar es obligatorio').isNumeric()
     , validarCampos], Delete)


app.post('/update' , [
    check('id', 'El id del calendar event a actualizar es obligatorio').isNumeric()
     , validarCampos] , Update)

module.exports = app