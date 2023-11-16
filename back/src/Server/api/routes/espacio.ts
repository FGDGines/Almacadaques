import { Router } from 'express'
import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator'
import { Create } from '../controllers/espacio/Create'
import { Read } from '../controllers/espacio/Read'
import { Delete } from '../controllers/espacio/Delete'
import { Update } from '../controllers/espacio/Update'
import { security_post } from '../../middlewares/Security'

const app = Router()

/**
 * @swagger
 * tags:
 *   name: Espacio
 *   description: Operaciones relacionadas con los espacios.
 */

/**
 * @swagger
 * /api/espacio/create:
 *   post:
 *     tags: [Espacio]
 *     summary: Crear espacio.
 *     description: Crea un nuevo espacio en diferentes idiomas.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos del espacio a crear.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             text_es:
 *               type: string
 *             text_en:
 *               type: string
 *             text_cat:
 *               type: string
 *     responses:
 *       '200':
 *         description: Espacio creado correctamente.
 */
app.post(
  '/create',
  [
    security_post,
    check('text_es', 'El texto en español es obligatoria').not().isEmpty(),
    check('text_en', 'El texto en ingles es obligatoria').not().isEmpty(),
    check('text_cat', 'El texto en catalan es obligatoria').not().isEmpty(),
    validarCampos,
  ],
  Create
)

/**
 * @swagger
 * /api/espacio/read:
 *   post:
 *     tags: [Espacio]
 *     summary: Leer espacio.
 *     description: Obtiene información del espacio según el idioma especificado.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Idioma del espacio a leer.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             lang:
 *               type: string
 *     responses:
 *       '200':
 *         description: Información del espacio obtenida correctamente.
 */
app.post(
  '/read',
  [check('lang', 'El idioma es obligatorio').not().isEmpty(), validarCampos],
  Read
)

/**
 * @swagger
 * /api/espacio/delete:
 *   post:
 *     tags: [Espacio]
 *     summary: Eliminar espacio.
 *     description: Elimina un espacio por su identificador.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Identificador del espacio a eliminar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *     responses:
 *       '200':
 *         description: Espacio eliminado correctamente.
 */
app.post(
  '/delete',
  [
    security_post,
    check('id', 'El espacio eliminar es obligatorio').isNumeric(),
    validarCampos,
  ],
  Delete
)

/**
 * @swagger
 * /api/espacio/update:
 *   post:
 *     tags: [Espacio]
 *     summary: Actualizar espacio.
 *     description: Actualiza un espacio por su identificador.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos actualizados del espacio.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             // Otros campos a actualizar
 *     responses:
 *       '200':
 *         description: Espacio actualizado correctamente.
 */
app.post(
  '/update',
  [
    security_post,
    check('id', 'El espacio a editar es obligatorio').isNumeric(),
    validarCampos,
  ],
  Update
)

module.exports = app
