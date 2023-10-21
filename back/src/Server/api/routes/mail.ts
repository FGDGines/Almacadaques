import {Router} from 'express'

import {Create} from '../controllers/mail/Create'
import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator'

const app = Router()

app.post( '/create', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'Debe proporcionar un correo valido').isEmail(),
    check('msg' , 'El texto del mensaje es pbligatorio').not().isEmpty(),
    check('fragment', 'La seccion del sitio web debe ser identificada').not().isEmpty()  
    , validarCampos] ,Create)

module.exports = app