import { Request, Response } from "express";
import { BlogRetiro } from "../../../db/models"; 
import { UploadFile } from "../../../helpers/FileHandler";
import path from 'path';
import { Formatos, RelativePath } from "../../../config/config";




export const AddFile = async (req: Request, res: Response) => {
    const { body } = req
    const { id } = body
    const updates = []

    try {const tBlogRetiro = await BlogRetiro.findOne({
        where: {
            id : id  , 
        }, 
        include: [{all:true}]
    })
        // @ts-ignore
        const image = req.files.src.data 
        // console.log(image)
        if(image){
            const past = tBlogRetiro.image
            const json = JSON.parse(past)
            if (json.length == 3) {
                return res.status(200).json({ status: 400, msg: "Cantidad de imagenes maxima pasada" })
            }
            // await DeleteFile(past)
            const url = await UploadFile( image, path.join(__dirname,  RelativePath.collaborator), "jpg", Formatos.image)
            const img = [
                ...json,
                url
            ] 
            await tBlogRetiro.update({image: img})
            updates.push({path: 'image', past , now: img})
            if(updates.length)return res.status(200).json({status: 200, msg: 'Imagen agregada', bag:{updates}})
        }
        return res.status(200).json({ status: 400, msg: "Debe pasar una imagen" })
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos subir imagen en este momento" })
    }
}