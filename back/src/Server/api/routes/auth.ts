import {Router} from 'express'
import { Register } from '../controllers/auth/Register'
import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator'
import { Login } from '../controllers/auth/Login'

const app = Router()

app.post('/register', 
 [check('correo' , 'Debe proporcionar un correo valido').isEmail(),  
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('password')
          .not().isEmpty().withMessage('La contraseña es obligatoria')
          .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
          .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/, "i").withMessage('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial'),
 validarCampos] ,Register)

app.post('/login' , [
    check('correo', 'El nombre de usuario es obligatorio').not().isEmpty(), 
    check('password', 'La contraseña es obligatoria').not().isEmpty()
    , validarCampos] , Login)
module.exports  = app