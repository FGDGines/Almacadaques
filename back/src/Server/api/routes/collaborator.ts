import {Router} from 'express' 
import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator' 
import { Register } from '../controllers/collaborator/Register'
import { Read } from '../controllers/collaborator/Read'
import { Delete } from '../controllers/collaborator/Delete'
import { Update } from '../controllers/collaborator/Update'
import { security_post } from '../../middlewares/Security'

const app = Router()
 
app.post('/register' , [security_post,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(), 
    check('cargo', 'El cargo es obligatorio').not().isEmpty(), 
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(), 
    check('contacto', 'El contacto es obligatorio').not().isEmpty()
    , validarCampos] , Register)

app.post('/read', [ 
    ], Read)

app.post('/delete' , [security_post,
    check("id", 'El colaborador a eliminar es obligatorio').isNumeric()
    , validarCampos], Delete)
    
app.post('/update', [ security_post,
    check('id', 'El colaborador a editar es obligatorio').not().isEmpty()
    , validarCampos] , Update)
    
module.exports = app