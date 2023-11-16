import { Router } from 'express'
import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator'
import { Register } from '../controllers/collaborator/Register'
import { Read } from '../controllers/collaborator/Read'
import { Delete } from '../controllers/collaborator/Delete'
import { Update } from '../controllers/collaborator/Update'
import { security_post } from '../../middlewares/Security'

const app = Router()

/**
 * @swagger
 * tags:
 *   name: Colaboradores
 *   description: Operaciones relacionadas con los colaboradores.
 */


/**
 * @swagger
 * /api/collaborator/register:
 *   post:
 *     tags: [Colaboradores]
 *     summary: Registro de colaborador.
 *     description: Registra un nuevo colaborador en el sistema.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos del colaborador a registrar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nombre:
 *               type: string
 *             cargo:
 *               type: string
 *             descripcion:
 *               type: string
 *             contacto:
 *               type: string
 *     responses:
 *       '200':
 *         description: Colaborador registrado correctamente.
 */
app.post(
  '/register',
  [
    security_post,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('cargo', 'El cargo es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('contacto', 'El contacto es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  Register
)

/**
 * @swagger
 * /api/collaborator/read:
 *   post:
 *     tags: [Colaboradores]
 *     summary: Leer colaboradores.
 *     description: Obtiene información de colaboradores.
 *     responses:
 *       '200':
 *         description: Información de colaboradores obtenida correctamente.
 */
app.post('/read', [], Read)

/**
 * @swagger
 * /api/collaborator/delete:
 *   post:
 *     tags: [Colaboradores]
 *     summary: Eliminar colaborador.
 *     description: Elimina un colaborador por su identificador.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Identificador del colaborador a eliminar.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *     responses:
 *       '200':
 *         description: Colaborador eliminado correctamente.
 */
app.post(
  '/delete',
  [
    security_post,
    check('id', 'El colaborador a eliminar es obligatorio').isNumeric(),
    validarCampos,
  ],
  Delete
)

/**
 * @swagger
 * /api/collaborator/update:
 *   post:
 *     tags: [Colaboradores]
 *     summary: Actualizar colaborador.
 *     description: Actualiza un colaborador existente por su identificador.
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos actualizados del colaborador.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             // Otros campos a actualizar
 *     responses:
 *       '200':
 *         description: Colaborador actualizado correctamente.
 */
app.post(
  '/update',
  [
    check('id', 'El colaborador a editar es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  Update
)

module.exports = app
