import { Router } from 'express'
import { validarCampos } from '../../middlewares/ValidarCampos'
import { security_post } from '../../middlewares/Security'
import { check } from 'express-validator'
import { Create } from '../controllers/blog_retiro/Create'
import { Read } from '../controllers/blog_retiro/Read'
import { Delete } from '../controllers/blog_retiro/Delete'
import { Update } from '../controllers/blog_retiro/Update'
import { AddFile } from '../controllers/blog_retiro/AddFile'

const app = Router()

/**
 * @swagger
 * tags:
 *   name: Blog Retiro
 *   description: Operaciones relacionadas con los blog retiro.
 */

/**
 * @swagger
 * /api/blog_retiro/create:
 *   post:
 *     tags: [Blog Retiro]
 *     summary: Crea un nuevo blog de retiro.
 *     description: Crea un nuevo blog de retiro con los datos proporcionados.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos del blog de retiro a crear.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title_es:
 *               type: string
 *             title_en:
 *               type: string
 *             title_cat:
 *               type: string
 *             description_es:
 *               type: string
 *             description_en:
 *               type: string
 *             description_cat:
 *               type: string
 *             index:
 *               type: number
 *             day:
 *               type: number
 *             month:
 *               type: number
 *             year:
 *               type: number
 *             author:
 *               type: string
 *     responses:
 *       '200':
 *         description: Blog de retiro creado exitosamente.
 */
app.post(
  '/create',
  [
    security_post,
    check('title_es', 'El titulo en español es obligatorio').not().isEmpty(),
    check('title_en', 'El titulo en ingles es obligatorio').not().isEmpty(),
    check('title_cat', 'El titulo en catalan es obligatorio').not().isEmpty(),
    check('description_es', 'El titulo en español es obligatorio')
      .not()
      .isEmpty(),
    check('description_en', 'El titulo en ingles es obligatorio')
      .not()
      .isEmpty(),
    check('description_cat', 'El titulo en catalan es obligatorio')
      .not()
      .isEmpty(),
    check('index', 'El indice es obligatorio').not().isEmpty(),
    check('day', 'El dia es obligatorio').not().isEmpty(),
    check('month', 'El mes es obligatorio').not().isEmpty(),
    check('year', 'El  año es obligatorio').not().isEmpty(),
    check('author', 'El autor es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  Create
)

/**
 * @swagger
 * /api/blog_retiro/read:
 *   post:
 *     tags: [Blog Retiro]
 *     summary: Obtener detalles de un blog de retiro.
 *     description: Obtiene los detalles de un blog de retiro.
 *     responses:
 *       '200':
 *         description: Detalles del blog de retiro obtenidos correctamente.
 */
app.post('/read', [], Read)

/**
 * @swagger
 * /api/blog_retiro/delete:
 *   post:
 *     tags: [Blog Retiro]
 *     summary: Eliminar un blog de retiro.
 *     description: Elimina un blog de retiro existente por su identificador.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Identificador del blog de retiro a eliminar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *     responses:
 *       '200':
 *         description: Blog de retiro eliminado correctamente.
 */
app.post(
  '/delete',
  [
    security_post,
    check('id', 'El blog retiro a eliminar es olbigatorio').isNumeric(),
    validarCampos,
  ],
  Delete
)

/**
 * @swagger
 * /api/blog_retiro/update:
 *   post:
 *     tags: [Blog Retiro]
 *     summary: Actualizar un blog de retiro.
 *     description: Actualiza un blog de retiro existente por su identificador.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos actualizados del blog de retiro.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             // otros campos a actualizar
 *     responses:
 *       '200':
 *         description: Blog de retiro actualizado correctamente.
 */
app.post(
  '/update',
  [
    check('id', 'El blog retiro a actualizar es obligatorio').isNumeric(),
    validarCampos,
  ],
  Update
)

/**
 * @swagger
 * /api/blog_retiro/add_file:
 *   post:
 *     tags: [Blog Retiro]
 *     summary: Agregar un archivo a un blog de retiro.
 *     description: Agrega un archivo a un blog de retiro existente.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos del archivo a agregar al blog de retiro.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             // otros campos del archivo
 *     responses:
 *       '200':
 *         description: Archivo agregado correctamente al blog de retiro.
 */
app.post(
  '/add_file',
  [
    security_post,
    check('id', 'El blog retiro a eliminar es olbigatorio').isNumeric(),
    validarCampos,
  ],
  AddFile
)

module.exports = app
