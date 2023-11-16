import { Router } from 'express'
import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator'
import { security_post } from '../../middlewares/Security'
import { Register } from '../controllers/text_libro/Register'
import { Read } from '../controllers/text_libro/Read'
import { Delete } from '../controllers/text_libro/Delete'
import { Update } from '../controllers/text_libro/Update'

const app = Router()

/**
 * @swagger
 * tags:
 *   name: Textos de Libro
 *   description: Operaciones relacionadas con los textos de libro.
 */

/**
 * @swagger
 * /api/text_libro/register:
 *   post:
 *     tags: [Textos de Libro]
 *     summary: Registrar texto de libro.
 *     description: Registra un nuevo texto de libro con título, subtítulo y contenido.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos del texto de libro a registrar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             subtitle:
 *               type: string
 *             content:
 *               type: string
 *     responses:
 *       '200':
 *         description: Texto de libro registrado correctamente.
 */
app.post(
  '/register',
  [
    security_post,
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('subtitle', 'El subtitulo es obligatorio').not().isEmpty(),
    check('content', 'El contenido es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  Register
)

/**
 * @swagger
 * /api/text_libro/read:
 *   post:
 *     tags: [Textos de Libro]
 *     summary: Leer textos de libro.
 *     description: Obtiene textos de libro.
 *     responses:
 *       '200':
 *         description: Textos de libro obtenidos correctamente.
 */
app.post('/read', [], Read)

/**
 * @swagger
 * /api/text_libro/delete:
 *   post:
 *     tags: [Textos de Libro]
 *     summary: Eliminar texto de libro.
 *     description: Elimina un texto de libro por su identificador.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Identificador del texto de libro a eliminar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *     responses:
 *       '200':
 *         description: Texto de libro eliminado correctamente.
 */
app.post(
  '/delete',
  [
    security_post,
    check('id', 'El text libro a eliminar es obligatorio').isNumeric(),
    validarCampos,
  ],
  Delete
)

/**
 * @swagger
 * /api/text_libro/update:
 *   post:
 *     tags: [Textos de Libro]
 *     summary: Actualizar texto de libro.
 *     description: Actualiza un texto de libro por su identificador.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Identificador del texto de libro a editar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *     responses:
 *       '200':
 *         description: Texto de libro actualizado correctamente.
 */
app.post(
  '/update',
  [
    security_post,
    check('id', 'El text libro a editar es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  Update
)

module.exports = app
