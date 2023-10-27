import { Request, Response } from "express";
import { Testimonio } from "../../../db/models";

export const Delete = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id} = body
    try{
        const tTestimonio = await Testimonio.findByPk(id)
        if(!tTestimonio) return res.status(200).json({status: 400, msg: "Debe proporcionar un testimonio válido"})

        await tTestimonio.destroy()

        return res.status(200).json({status: 200, msg: "Testimonio eliminado"})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos eliminar testimonios en este momento"})
    }
}