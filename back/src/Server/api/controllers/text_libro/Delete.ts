import { Request, Response } from "express";
import { TextLibro } from "../../../db/models";
import { DeleteFile } from "../../../helpers/FileHandler";
import path from 'path';
import { RelativePath } from "../../../config/config";

export const Delete = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id} = body

    try{
        const tTextLibro = await TextLibro.findByPk(id); 

        if(!tTextLibro) return res.status(200).json({status: 400 , msg: "Debe proporcionar un text libro válido"})

        const past = tTextLibro.imagen_src
        if (past) {
            const uploadDir = path.join(__dirname,  RelativePath.text_libro)
            try {
                
            await DeleteFile(path.join(uploadDir, past))  
            } catch (error) {
                
            }      
        }
        
        await tTextLibro.destroy()
        return res.status(200).json({status: 200, msg: "Text libro eliminado"})

    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos eliminar text libro en este momento"})
    }
}