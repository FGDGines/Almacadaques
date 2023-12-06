import { Request, Response } from "express";
import { Colaborador } from "../../../db/models";
import { DeleteFile } from "../../../helpers/FileHandler";
import path from 'path';
import { RelativePath } from "../../../config/config";

export const Delete = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id} = body

    try{
        const tColaborador = await Colaborador.findByPk(id); 

        if(!tColaborador) return res.status(200).json({status: 400 , msg: "Debe proporcionar un colaborador válido"})

        const past = tColaborador.imagen
        if (past) {
            const uploadDir = path.join(__dirname,  RelativePath.collaborator)
            try {
                
            await DeleteFile(path.join(uploadDir, past))  
            } catch (error) {
                
            }      
        }
        await tColaborador.destroy()
        return res.status(200).json({status: 200, msg: "Colaborador eliminado"})

    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos eliminar colaborador en este momento"})
    }
}