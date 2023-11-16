import { Router } from 'express'

import { Create } from '../controllers/mail/Create'
import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator'
import { Read } from '../controllers/mail/Read'
import { Delete } from '../controllers/mail/Delete'

const app = Router()

/**
 * @swagger
 * tags:
 *   name: Correo
 *   description: Operaciones relacionadas con los correos.
 */

/**
 * @swagger
 * /api/mail/create:
 *   post:
 *     tags: [Correo]
 *     summary: Crear mensaje de correo.
 *     description: Crea un nuevo mensaje de correo con nombre, correo, mensaje y sección del sitio web.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos del mensaje de correo a crear.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nombre:
 *               type: string
 *             correo:
 *               type: string
 *             msg:
 *               type: string
 *             fragment:
 *               type: string
 *     responses:
 *       '200':
 *         description: Mensaje de correo creado correctamente.
 */
app.post(
  '/create',
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'Debe proporcionar un correo valido').isEmail(),
    check('msg', 'El texto del mensaje es pbligatorio').not().isEmpty(),
    check('fragment', 'La seccion del sitio web debe ser identificada')
      .not()
      .isEmpty(),
    validarCampos,
  ],
  Create
)

/**
 * @swagger
 * /api/mail/read:
 *   post:
 *     tags: [Correo]
 *     summary: Leer mensajes de correo.
 *     description: Obtiene mensajes de correo, con opción de ver elementos eliminados o no.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Indica si se desea ver los elementos eliminados o no.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             deleted:
 *               type: number
 *     responses:
 *       '200':
 *         description: Mensajes de correo obtenidos correctamente.
 */
app.post(
  '/read',
  [
    check(
      'deleted',
      'De indicar si desea ver los elementos eliminados o no'
    ).isNumeric(),
    validarCampos,
  ],
  Read
)

/**
 * @swagger
 * /api/mail/delete:
 *   post:
 *     tags: [Correo]
 *     summary: Eliminar mensaje de correo.
 *     description: Elimina un mensaje de correo por su identificador.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Identificador del mensaje a eliminar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *     responses:
 *       '200':
 *         description: Mensaje de correo eliminado correctamente.
 */
app.post(
  '/delete',
  [
    check('id', 'El ID del mensaje a eliminar es obligatorio').isNumeric(),
    validarCampos,
  ],
  Delete
)

module.exports = app
