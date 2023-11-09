import {Router} from 'express' 
import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator' 
import { Register } from '../controllers/collaborator/Register'
import { Read } from '../controllers/collaborator/Read'
import { Delete } from '../controllers/collaborator/Delete'
import { Update } from '../controllers/collaborator/Update'

const app = Router()
 
app.post('/register' , [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(), 
    check('cargo', 'El cargo es obligatorio').not().isEmpty(), 
    check('descripcion', 'El nombre de usuario es obligatorio').not().isEmpty(), 
    check('imagen', 'La imagen es obligatorio').not().isEmpty(), 
    check('contacto', 'El contacto es obligatorio').not().isEmpty()
    , validarCampos] , Register)

app.post('/read', [
    check('id', 'El colaborador es necesario').isNumeric()
    , validarCampos], Read)

app.post('/delete' , [
    check("id", 'El colaborador eliminar es obligatorio').isNumeric()
    , validarCampos], Delete)
    
app.post('/update', [
    check('id', 'El testimonio a editar es obligatorio').not().isEmpty()
    , validarCampos] , Update)
    
module.exports  = app