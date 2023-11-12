import {Router} from 'express' 
import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator' 
import { security_post } from '../../middlewares/Security'
import { Register } from '../controllers/podcast/Register'
import { Read } from '../controllers/podcast/Read'
import { Delete } from '../controllers/podcast/Delete'
import { Update } from '../controllers/podcast/Update'

const app = Router()
 
app.post('/register' , [
    check('url', 'La url es obligatoria').not().isEmpty(), 
    check('titulo', 'El titulo es obligatorio').not().isEmpty(), 
    check('autor', 'El autor es obligatorio').not().isEmpty(), 
    check('fecha', 'La fecha es obligatoria').not().isEmpty(), 
    check('categoria', 'La categoria es obligatoria').not().isEmpty()
    , validarCampos] , Register)

app.post('/read', [ 
    ], Read)

app.post('/delete' , [security_post,
    check("id", 'El podcast a eliminar es obligatorio').isNumeric()
    , validarCampos], Delete)
    
app.post('/update', [security_post,
    check('id', 'El podcast a editar es obligatorio').not().isEmpty()
    , validarCampos] , Update)
    
module.exports = app