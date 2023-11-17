import { Request, Response } from "express";
import { Formatos, RelativePath } from "../../../config/config";
import path from 'path';
import { Red } from "../../../db/models";
import { DeleteFile, UploadFile } from "../../../helpers/FileHandler";

export const Update = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id:primaryKey, url, cuenta } = body
    const updates = []
    try{

        const tRed = await Red.findOne({
            where: {
                id : primaryKey  , 
            }, 
            include: [{all:true}]
        })

        if(!tRed) return res.status(200).json({status: 400, msg: "El espacio debe ser válido" })

        if(url){
            const past = tRed.url
            await tRed.update({url: url})
            updates.push({path: 'url', past , now: url})
        }

        if(cuenta){
            const past = tRed.cuenta
            await tRed.update({text_en: cuenta})
            updates.push({path: 'cuenta', past , now: cuenta})
        }

        try {
            // @ts-ignore
            const imagen = req.files.src.data
            if(imagen){
                const past = tRed.archivo
                if (past) {
                    const uploadDir = path.join(__dirname,  RelativePath.red)
                    await DeleteFile(path.join(uploadDir, past))        
                }
                const img = await UploadFile( imagen, path.join(__dirname,  RelativePath.podcast), "jpg", Formatos.image)
                await tRed.update({archivo: img})
                updates.push({path: 'archivo', past , now: img})
            }
        } catch (error) {}

        if(updates.length)return res.status(200).json({status: 200, msg: 'Red editada', bag:{updates}})
        return res.status(200).json({status: 200, msg: 'No se han realizado ediciones'})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos editar red en este momento"})
    }
}