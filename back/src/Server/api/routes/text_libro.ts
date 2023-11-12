import {Router} from 'express' 
import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator' 
import { security_post } from '../../middlewares/Security'
import { Register } from '../controllers/text_libro/Register'
import { Read } from '../controllers/text_libro/Read'
import { Delete } from '../controllers/text_libro/Delete'
import { Update } from '../controllers/text_libro/Update'

const app = Router()
 
app.post('/register' , [security_post,
    check('title', 'El titulo es obligatorio').not().isEmpty(), 
    check('subtitle', 'El subtitulo es obligatorio').not().isEmpty(), 
    check('content', 'La descripcion es obligatoria').not().isEmpty()
    , validarCampos] , Register)

app.post('/read', [ 
    ], Read)

app.post('/delete' , [security_post,
    check("id", 'El text libro a eliminar es obligatorio').isNumeric()
    , validarCampos], Delete)
    
app.post('/update', [
    check('id', 'El text libro a editar es obligatorio').not().isEmpty()
    , validarCampos] , Update)
    
module.exports = app