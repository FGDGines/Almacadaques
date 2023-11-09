import { Request, Response } from "express";
import { Colaborador } from "../../../db/models";

export const Read = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id} = body
    try{
        const tColaborador = await Colaborador.findByPk(id); 
        if (!tColaborador) res.status(200).json({status: 200, msg: "Debe colaborador ser válido" , bag: tColaborador})
        return res.status(200).json({status: 200, msg: "Mensajes Obtenidos con éxito" , bag: tColaborador})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos leer Mensajes en este momento"})
    }
}