import { Router } from "express";
import { validarCampos } from "../../middlewares/ValidarCampos";
import { security_post } from "../../middlewares/Security";
import { Create } from "../controllers/testimony/Create";
import { check } from "express-validator";

const app = Router()

app.post('/create' , [security_post  ,
    check('witness', 'El nombre del testigo es obligatorio').not().isEmpty(),
    check('testimony','El testomonio es obligatorio').not().isEmpty(),
    check('imagen','La imagen es obligatoria').not().isEmpty()
    , validarCampos] , Create)

module.exports = app