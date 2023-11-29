import {Router} from 'express' 
import { validarCampos } from '../../middlewares/ValidarCampos'
import { check } from 'express-validator'  
import { Create } from '../controllers/espacio/Create'
import { Read } from '../controllers/espacio/Read'
import { Delete } from '../controllers/espacio/Delete'
import { Update } from '../controllers/espacio/Update'
import { security_post } from '../../middlewares/Security'
import { ReadByID } from '../controllers/espacio/ReadById'

const app = Router()
 
app.post('/create', [security_post,
    check('text_es','El texto en español es obligatoria').not().isEmpty(), 
    check('text_en','El texto en ingles es obligatoria').not().isEmpty(), 
    check('text_cat','El texto en catalan es obligatoria').not().isEmpty()
    , validarCampos], Create)

app.post('/read', [ 
    check('lang', 'El idioma es obligatorio').not().isEmpty()
    , validarCampos], Read)

app.post('/readbyid', [ 
    check('id', 'El id es obligatorio').not().isEmpty()
    , validarCampos], ReadByID) 

app.post('/delete' , [security_post,
    check("id", 'El espacio eliminar es obligatorio').isNumeric()
    , validarCampos], Delete)
    
app.post('/update', [security_post,
    check('id', 'El espacio a editar es obligatorio').isNumeric()
    , validarCampos] , Update)
    
module.exports = app