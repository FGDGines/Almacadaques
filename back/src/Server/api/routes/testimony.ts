import { Router } from 'express'
import { validarCampos } from '../../middlewares/ValidarCampos'
import { security_post } from '../../middlewares/Security'
import { Create } from '../controllers/testimony/Create'
import { check } from 'express-validator'
import { Delete } from '../controllers/testimony/Delete'
import { Update } from '../controllers/testimony/Update'
import { Read } from '../controllers/testimony/Read'

const app = Router()

/**
 * @swagger
 * tags:
 *   name: Testimonios
 *   description: Operaciones relacionadas con los testimonios.
 */

/**
 * @swagger
 * /api/testimony/create:
 *   post:
 *     tags: [Testimonios]
 *     summary: Crear un nuevo testimonio.
 *     description: Crea un nuevo testimonio con el nombre del testigo y testimonios en diferentes idiomas.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos del testimonio a crear.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             witness:
 *               type: string
 *             testimony_es:
 *               type: string
 *             testimony_en:
 *               type: string
 *             testimony_cat:
 *               type: string
 *     responses:
 *       '200':
 *         description: Testimonio creado correctamente.
 */
app.post(
  '/create',
  [
    security_post,
    check('witness', 'El nombre del testigo es obligatorio').not().isEmpty(),
    check('testimony_es', 'El testimonio en español es obligatorio')
      .not()
      .isEmpty(),
    check('testimony_en', 'El testimonio en ingles es obligatorio')
      .not()
      .isEmpty(),
    check('testimony_cat', 'El testimonio en catalán es obligatorio')
      .not()
      .isEmpty(),
    validarCampos,
  ],
  Create
)

/**
 * @swagger
 * /api/testimony/update:
 *   post:
 *     tags: [Testimonios]
 *     summary: Actualizar un testimonio.
 *     description: Actualiza un testimonio por su identificador.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Identificador del testimonio a editar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *     responses:
 *       '200':
 *         description: Testimonio actualizado correctamente.
 */
app.post(
  '/update',
  [
    security_post,
    check('id', 'El testimonio a editar es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  Update
)

/**
 * @swagger
 * /api/testimony/delete:
 *   post:
 *     tags: [Testimonios]
 *     summary: Eliminar un testimonio.
 *     description: Elimina un testimonio por su identificador.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Identificador del testimonio a eliminar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *     responses:
 *       '200':
 *         description: Testimonio eliminado correctamente.
 */
app.post(
  '/delete',
  [
    security_post,
    check('id', 'El testimonio a eliminar es obligatorio').isNumeric(),
    validarCampos,
  ],
  Delete
)

/**
 * @swagger
 * /api/testimony/read:
 *   post:
 *     tags: [Testimonios]
 *     summary: Leer testimonios.
 *     description: Obtiene testimonios por su idioma.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Idioma del testimonio a obtener.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             lang:
 *               type: string
 *     responses:
 *       '200':
 *         description: Testimonios obtenidos correctamente.
 */
app.post(
  '/read',
  [check('lang', 'El idioma es obligatorio').not().isEmpty(), validarCampos],
  Read
)
module.exports = app
