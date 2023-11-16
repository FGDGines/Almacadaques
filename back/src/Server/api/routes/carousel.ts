import { Router } from 'express'
import { Create } from '../controllers/carousel/Create'
import { validarCampos } from '../../middlewares/ValidarCampos'
import { security_post } from '../../middlewares/Security'
import { check } from 'express-validator'
import { Read } from '../controllers/carousel/Read'
import { Delete } from '../controllers/carousel/Delete'
import { Update } from '../controllers/carousel/Update'

const app = Router()

/**
 * @swagger
 * tags:
 *   name: Carousel
 *   description: Operaciones relacionadas con los carousel.
 */


/**
 * @swagger
 * /api/carousel/create:
 *   post:
 *     tags: [Carousel]
 *     summary: Crear un elemento de carrusel.
 *     description: Crea un nuevo elemento de carrusel con la información proporcionada.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos para crear un elemento de carrusel.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             frase_es:
 *               type: string
 *             frase_en:
 *               type: string
 *             frase_cat:
 *               type: string
 *             fileExtension:
 *               type: string
 *             autor:
 *               type: string
 *             link_autor:
 *               type: string
 *     responses:
 *       '200':
 *         description: Elemento de carrusel creado correctamente.
 */
app.post(
  '/create',
  [
    security_post,
    check('frase_es', 'La frase en español es obligatoria').not().isEmpty(),
    check('frase_en', 'La frase en ingles es obligatoria').not().isEmpty(),
    check('frase_cat', 'La frase en catalan es obligatoria').not().isEmpty(),
    check('fileExtension', 'La extencion del archivo es obligatoria')
      .not()
      .isEmpty(),
    check('autor', 'El nombre del autor es obligatorio').not().isEmpty(),
    check('link_autor', 'El link del autor es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  Create
)

/**
 * @swagger
 * /api/carousel/read:
 *   post:
 *     tags: [Carousel]
 *     summary: Leer elementos de carrusel.
 *     description: Lee elementos de carrusel según el idioma especificado.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Idioma para leer elementos de carrusel.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             lang:
 *               type: string
 *     responses:
 *       '200':
 *         description: Elementos de carrusel leídos correctamente.
 */
app.post(
  '/read',
  [check('lang', 'El idioma es obligatorio').not().isEmpty(), validarCampos],
  Read
)

/**
 * @swagger
 * /api/carousel/delete:
 *   post:
 *     tags: [Carousel]
 *     summary: Eliminar un elemento de carrusel.
 *     description: Elimina un elemento de carrusel por su identificador.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Identificador del elemento de carrusel a eliminar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *     responses:
 *       '200':
 *         description: Elemento de carrusel eliminado correctamente.
 */
app.post(
  '/delete',
  [
    security_post,
    check('id', 'El carousel item a eliminar es olbigatorio').isNumeric(),
    validarCampos,
  ],
  Delete
)

/**
 * @swagger
 * /api/carousel/update:
 *   post:
 *     tags: [Carousel]
 *     summary: Actualizar un elemento de carrusel.
 *     description: Actualiza un elemento de carrusel existente por su identificador.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos actualizados del elemento de carrusel.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             // otros campos a actualizar
 *     responses:
 *       '200':
 *         description: Elemento de carrusel actualizado correctamente.
 */
app.post(
  '/update',
  [
    check('id', 'El id del carosuel a eliminar es obligatorio').isNumeric(),
    validarCampos,
  ],
  Update
)

module.exports = app
