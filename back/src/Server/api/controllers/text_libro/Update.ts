import { Request, Response } from "express";
import { TextLibro } from "../../../db/models"; 
import { DeleteFile, UploadFile } from "../../../helpers/FileHandler";
import path from 'path';
import { Formatos, RelativePath } from "../../../config/config";


export const Update = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id:primaryKey, title, subtitle, content} = body
    const updates = []
    try{

        const tTextLibro = await TextLibro.findOne({
            where: {
                id : primaryKey  , 
            }, 
            include: [{all:true}]
        })

        if(!tTextLibro) return res.status(200).json({status: 400, msg: "El podcast debe ser válido" })

        if(title){
            if (String(title).length > 10) {
                return res.status(200).json({ status: 400, msg: "El titulo debe ser menos de 10 caracteres"})
            }
            const past = tTextLibro.title
            await tTextLibro.update({title: title})
            updates.push({path: 'title', past , now: title})
        }

        if(subtitle){
            if (String(subtitle).length > 10) {
                return res.status(200).json({ status: 400, msg: "El subtitulo debe ser menos de 10 caracteres"})
            }
            const past = tTextLibro.subtitle
            await tTextLibro.update({subtitle: subtitle})
            updates.push({path: 'subtitle', past , now: subtitle})
        }

        if(content){
            const past = tTextLibro.content
            await tTextLibro.update({content: content})
            updates.push({path: 'content', past , now: content})
        }

        // sin el try si no mandas foto da error
        try {
            // @ts-ignore
            const imagen = req.files.src.data
            if(imagen){
                const past = tTextLibro.imagen_src
                if (past) {
                    const uploadDir = path.join(__dirname,  RelativePath.text_libro)
                    try {
                        
                    await DeleteFile(path.join(uploadDir, past))  
                    } catch (error) {
                        
                    }      
                }
                const url = await UploadFile( imagen, path.join(__dirname,  RelativePath.text_libro), "jpg", Formatos.image)
                await tTextLibro.update({imagen_src: url})
                updates.push({path: 'imagen', past , now: url})
            }
        } catch (error) {}

        if(updates.length)return res.status(200).json({status: 200, msg: 'Text libro editado', bag:{updates}})
        return res.status(200).json({status: 200, msg: 'No se han realizado ediciones'})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos editar text libro en este momento"})
    }
}