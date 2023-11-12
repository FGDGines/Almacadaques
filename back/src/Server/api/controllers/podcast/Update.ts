import { Request, Response } from "express";
import { Podcast } from "../../../db/models"; 
import { UploadFile } from "../../../helpers/FileHandler";
import path from 'path';
import { Formatos, RelativePath } from "../../../config/config";


export const Update = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id:primaryKey, url, titulo, autor, fecha, categoria} = body
    const updates = []
    try{

        const tPodcast = await Podcast.findOne({
            where: {
                id : primaryKey  , 
            }, 
            include: [{all:true}]
        })

        if(!tPodcast) return res.status(200).json({status: 400, msg: "El podcast debe ser válido" })

        if(url){
            const past = tPodcast.url
            await tPodcast.update({url: url})
            updates.push({path: 'url', past , now: url})
        }

        if(titulo){
            const past = tPodcast.titulo
            await tPodcast.update({titulo: titulo})
            updates.push({path: 'titulo', past , now: titulo})
        }

        if(autor){
            const past = tPodcast.autor
            await tPodcast.update({autor: autor})
            updates.push({path: 'autor', past , now: autor})
        }

        // sin el try si no mandas foto da error
        try {
            // @ts-ignore
            const imagen = req.files.src.data
            if(imagen){
                const past = tPodcast.imagen
                // await DeleteFile(past)
                // @ts-ignore
                const url = await UploadFile( imagen, path.join(__dirname,  RelativePath.podcast), "jpg", Formatos.image)
                await tPodcast.update({imagen: url})
                updates.push({path: 'imagen', past , now: url})
            }
        } catch (error) {}

        

        if(fecha){
            const past = tPodcast.fecha
            await tPodcast.update({fecha:fecha})
            updates.push({path: 'fecha', past , now:fecha})
        }

        if(categoria){
            const past = tPodcast.categoria
            await tPodcast.update({categoria:categoria})
            updates.push({path: 'categoria', past , now:categoria})
        }

        if(updates.length)return res.status(200).json({status: 200, msg: 'Podcast editado', bag:{updates}})
        return res.status(200).json({status: 200, msg: 'No se han realizado ediciones'})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos editar podcast en este momento"})
    }
}