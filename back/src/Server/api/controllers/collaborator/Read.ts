import { Request, Response } from "express";
import { Colaborador } from "../../../db/models";

export const Read = async ( req: Request ,res: Response)=>{
    const { body } = req
    const { lang } = body
    try{
        if(!['es', 'en' , 'cat'].includes(lang)) return res.status(200).json({status: 400, msg: 'Debe proporcionar un idioma válido'})
        const tColaborador = await Colaborador.findAll({
            attributes: ['id', 'contacto', `nombre_${lang}`, `cargo_${lang}`, `descripcion_${lang}`, "imagen"]
        }); 
        return res.status(200).json({status: 200, msg: "Colaboradores obtenidos con éxito" , bag: tColaborador})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos leer colaborador en este momento"})
    }
}