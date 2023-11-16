import { Router } from 'express'
import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator'
import { security_post } from '../../middlewares/Security'
import { Register } from '../controllers/podcast/Register'
import { Read } from '../controllers/podcast/Read'
import { Delete } from '../controllers/podcast/Delete'
import { Update } from '../controllers/podcast/Update'

const app = Router()

/**
 * @swagger
 * tags:
 *   name: Podcast
 *   description: Operaciones relacionadas con los podcast.
 */

/**
 * @swagger
 * /api/podcast/register:
 *   post:
 *     tags: [Podcast]
 *     summary: Registrar un nuevo podcast.
 *     description: Registra un nuevo podcast con URL, título, autor, fecha y categoría.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos del podcast a registrar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             url:
 *               type: string
 *             titulo:
 *               type: string
 *             autor:
 *               type: string
 *             fecha:
 *               type: string
 *             categoria:
 *               type: string
 *     responses:
 *       '200':
 *         description: Podcast registrado correctamente.
 */
app.post(
  '/register',
  [
    security_post,
    check('url', 'La url es obligatoria').not().isEmpty(),
    check('titulo', 'El titulo es obligatorio').not().isEmpty(),
    check('autor', 'El autor es obligatorio').not().isEmpty(),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('categoria', 'La categoria es obligatoria').not().isEmpty(),
    validarCampos,
  ],
  Register
)

/**
 * @swagger
 * /api/podcast/read:
 *   post:
 *     tags: [Podcast]
 *     summary: Leer podcasts.
 *     description: Obtiene podcasts.
 *     responses:
 *       '200':
 *         description: Podcasts obtenidos correctamente.
 */
app.post('/read', [], Read)

/**
 * @swagger
 * /api/podcast/delete:
 *   post:
 *     tags: [Podcast]
 *     summary: Eliminar podcast.
 *     description: Elimina un podcast por su identificador.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Identificador del podcast a eliminar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *     responses:
 *       '200':
 *         description: Podcast eliminado correctamente.
 */
app.post(
  '/delete',
  [
    security_post,
    check('id', 'El podcast a eliminar es obligatorio').isNumeric(),
    validarCampos,
  ],
  Delete
)

/**
 * @swagger
 * /api/podcast/update:
 *   post:
 *     tags: [Podcast]
 *     summary: Actualizar podcast.
 *     description: Actualiza un podcast por su identificador.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Identificador del podcast a editar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *     responses:
 *       '200':
 *         description: Podcast actualizado correctamente.
 */
app.post(
  '/update',
  [
    security_post,
    check('id', 'El podcast a editar es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  Update
)

module.exports = app
