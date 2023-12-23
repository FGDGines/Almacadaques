import {Router} from 'express' 
import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator' 
import { Register } from '../controllers/collaborator/Register'
import { Read } from '../controllers/collaborator/Read'
import { Delete } from '../controllers/collaborator/Delete'
import { Update } from '../controllers/collaborator/Update'
import { security_post } from '../../middlewares/Security'
import { ReadById } from '../controllers/collaborator/ReadById'

const app = Router()
 
app.post('/register' , [security_post,
    check('nombre_es', 'El nombre_es es obligatorio').not().isEmpty(), 
    check('cargo_es', 'El cargo_es es obligatorio').not().isEmpty(), 
    check('descripcion_es', 'La descripcion_es es obligatoria').not().isEmpty(), 
    check('nombre_en', 'El nombre_en es obligatorio').not().isEmpty(), 
    check('cargo_en', 'El cargo_en es obligatorio').not().isEmpty(), 
    check('descripcion_en', 'La descripcion_en es obligatoria').not().isEmpty(), 
    check('nombre_cat', 'El nombre_cat es obligatorio').not().isEmpty(), 
    check('cargo_cat', 'El cargo_cat es obligatorio').not().isEmpty(), 
    check('descripcion_cat', 'La descripcion_cat es obligatoria').not().isEmpty(), 
    check('contacto', 'El contacto es obligatorio').not().isEmpty()
    , validarCampos] , Register)

app.post('/read', [ 
    check('lang', 'El idioma es obligatorio').not().isEmpty(),
    ], Read)

app.post('/readbyid', [ 
    check('id', 'El id es obligatorio').not().isEmpty(),
    ], ReadById)
app.post('/delete' , [security_post,
    check("id", 'El colaborador a eliminar es obligatorio').isNumeric()
    , validarCampos], Delete)
    
app.post('/update', [ security_post,
    check('id', 'El colaborador a editar es obligatorio').not().isEmpty()
    , validarCampos] , Update)
    
module.exports = app