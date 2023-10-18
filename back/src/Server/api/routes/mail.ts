import {Router} from 'express'

import {Send} from '../controllers/mail/Send'
import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator'

const app = Router()

app.post( '/send', [
    check("id",'ID is required').isNumeric()
    // check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    // check('correo', 'Debe proporcionar un correo valido').isEmail(),
    // check('msg' , 'El texto del mensaje es pbligatorio').not().isEmpty(),
    // check('fragment', 'La seccion del sitio web debe ser identificada').not().isEmpty()  
    , validarCampos] ,Send )


module.exports = app