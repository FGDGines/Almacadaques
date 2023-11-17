import { Router } from 'express'

import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator'
import { Create } from '../controllers/red/Create'
import { Delete } from '../controllers/red/Delete'
import { Read } from '../controllers/red/Read'
import { Update } from '../controllers/red/Update'

const app = Router()

app.post('/create', [
    check('url', 'La url es obligatoria').not().isEmpty(),
    check('cuenta', 'La cuenta es obligatoria').isEmail()
    , validarCampos], Create)

app.post('/read', [
    ], Read)
app.post('/delete' , [
    check("id", 'El id de la red a eliminar es obligatorio').isNumeric()
    , validarCampos], Delete)

app.post('/update' , [
    check("id", 'El id de la red a editar es obligatorio').isNumeric()
    , validarCampos], Update)
module.exports = app