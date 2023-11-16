import { Router } from 'express'
import { Register } from '../controllers/auth/Register'
import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator'
import { Login } from '../controllers/auth/Login'

const app = Router()

/**
 * @swagger
 * tags:
 *   name: Autenticación
 *   description: Operaciones relacionadas con los autenticación.
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags: [Autenticación]
 *     summary: Registro de usuario
 *     description: Crea un nuevo usuario en el sistema.
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Objeto JSON con los datos del usuario a registrar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             correo:
 *               type: string
 *             nombre:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       '200':
 *         description: Usuario registrado correctamente.
 */
app.post(
  '/register',
  [
    check('correo', 'Debe proporcionar un correo valido').isEmail(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password')
      .not()
      .isEmpty()
      .withMessage('La contraseña es obligatoria')
      .isLength({ min: 8 })
      .withMessage('La contraseña debe tener al menos 8 caracteres')
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/, 'i')
      .withMessage(
        'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial'
      ),
    validarCampos,
  ],
  Register
)

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags: [Autenticación]
 *     summary: Inicio de sesión
 *     description: Inicia sesión con las credenciales proporcionadas.
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Objeto JSON con las credenciales de inicio de sesión.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             correo:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       '200':
 *         description: Usuario autenticado correctamente.
 */
app.post(
  '/login',
  [
    check('correo', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos,
  ],
  Login
)
module.exports = app
