import { Router } from "express"; 
import { validarCampos } from "../../middlewares/ValidarCampos";
import { security_post } from "../../middlewares/Security";
import { check } from "express-validator"; 
import { Create } from "../controllers/blog_retiro/Create";
import { Read } from "../controllers/blog_retiro/Read";
import { Delete } from "../controllers/blog_retiro/Delete";
import { Update } from "../controllers/blog_retiro/Update";

const app = Router()

app.post('/create', [security_post,
    check('title_es','El titulo en español es obligatorio').not().isEmpty(), 
    check('title_en','El titulo en ingles es obligatorio').not().isEmpty(), 
    check('title_cat','El titulo en catalan es obligatorio').not().isEmpty(), 
    check('description_es','El titulo en español es obligatorio').not().isEmpty(), 
    check('description_en','El titulo en ingles es obligatorio').not().isEmpty(), 
    check('description_cat','El titulo en catalan es obligatorio').not().isEmpty(),  
    check('index', 'El indice es obligatorio').not().isEmpty(),
    check('day', 'El dia es obligatorio').not().isEmpty(),
    check('month', 'El mes es obligatorio').not().isEmpty(),
    check('year', 'El  año es obligatorio').not().isEmpty(),
    check('image', 'La imagem es obligatorio').not().isEmpty(),
    check('author', 'El autor es obligatorio').not().isEmpty()
     , validarCampos], Create)

app.post('/read', [
    ], Read)

app.post('/delete' , [security_post,
    check('id', 'El blog retiro a eliminar es olbigatorio').isNumeric()
     , validarCampos], Delete)


app.post('/update' , [security_post,
    check('id', 'El blog retiro a actualizar es obligatorio').isNumeric()
     , validarCampos] , Update)

module.exports = app