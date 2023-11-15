import { Request, Response } from "express";
import { Colaborador } from "../../../db/models";

export const Read = async ( req: Request ,res: Response)=>{
    const {} = req
    try{
        const tColaborador = await Colaborador.findAll(); 
        return res.status(200).json({status: 200, msg: "Colaboradores obtenidos con éxito" , bag: tColaborador})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos leer colaborador en este momento"})
    }
}