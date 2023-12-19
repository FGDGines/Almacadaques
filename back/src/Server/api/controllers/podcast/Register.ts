import { Request, Response } from "express";
import { Podcast } from "../../../db/models";
// import { UploadFile } from "../../../helpers/FileHandler";
// import path from 'path';
// import { Formatos, RelativePath } from "../../../config/config";

export const Register = async (req: Request, res: Response) => {
    const { body } = req
    const { url, titulo, autor, fecha, categoria } = body
    if (categoria != "Libros con Alma" && categoria != "Experiencias Almacadaqués" && categoria != "Meditaciones" && categoria != "Almas Inspiradoras") {
        return res.status(200).json({ status: 400, msg: "Categoria incorrecta" })
    }
    try { 
        // @ts-ignore
        // if (req.files.src.data) {
        //     // @ts-ignore
        //     const url = await UploadFile( req.files.src.data, path.join(__dirname,  RelativePath.podcast), "jpg", Formatos.image)
             
        //     const tPodcast = new Podcast({
        //         ...body,
        //         imagen: url
        //     })
        //     await tPodcast.save();
        //     return res.status(200).json({ status: 200, msg: "Podcast registrado", bag: tPodcast})
        // }
        // return res.status(200).json({ status: 400, msg: "Debe pasar una imagen"})
        
        const tPodcast = new Podcast({
            autor: autor,
            url: url,
            titulo: titulo,
            fecha: fecha,
            categoria: categoria,
            imagen: ""
        })
        await tPodcast.save();
        return res.status(200).json({ status: 200, msg: "Podcast registrado", bag: tPodcast})
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No se puede crear podcast" })
    }
}