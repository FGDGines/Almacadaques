import { Router } from 'express'

import { Create } from '../controllers/mail/Create'
import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator'
import { Read } from '../controllers/mail/Read';
import { Delete } from '../controllers/mail/Delete';

const app = Router()

app.post('/create', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'Debe proporcionar un correo valido').isEmail(),
    check('msg', 'El texto del mensaje es pbligatorio').not().isEmpty(),
    check('fragment', 'La seccion del sitio web debe ser identificada').not().isEmpty()
    , validarCampos], Create)

app.post('/read', [
    check('deleted', 'De indicar si desea ver los elementos eliminados o no').isNumeric()
    , validarCampos], Read)
app.post('/delete' , [
    check("id", 'El ID del mensaje a eliminar es obligatorio').isNumeric()
    , validarCampos], Delete)

module.exports = app