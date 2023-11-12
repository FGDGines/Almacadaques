import { Request, Response } from "express";
import { Carousel, DataCarousel } from "../../../db/models";
import { DeleteFile, UploadFile } from "../../../helpers/FileHandler";
import path from 'path';
import { Formatos, RelativePath } from "../../../config/config";

export const Update = async (req: Request, res: Response) => {
    const { body } = req
    const { id, frase_es, frase_en, frase_cat, autor, link_autor, fileExtension} = body
    const updates = []
    try {
        const tCarousels = await Carousel.findOne({
            where: {
                id: id
            },
            include: [
                {
                    model: DataCarousel
                }
            ]
        })

        if(!tCarousels) return res.status(200).json({status: 404 , msg: 'No existe carousel con el id ' + id})

        // @ts-ignore
        const src = req.files.src.data
        if (src) {
            const past = tCarousels.src
            if (past) {
                const uploadDir = path.join(__dirname,  RelativePath.carousel)
                await DeleteFile(path.join(uploadDir, past))        
            }
            const url = await UploadFile( src, path.join(__dirname,  RelativePath.carousel), fileExtension, Formatos.image)
            await tCarousels.update({src: url})
            updates.push({path: 'src', past , now: url})
        }


        const idC = tCarousels.id_data_carousel
        const tDataCarousel = await DataCarousel.findOne({
            where: {
                id: idC
            }
        })
        if(frase_es){
            const past = tDataCarousel.es
            await tDataCarousel.update({es: frase_es})
            updates.push({path: 'es' , past, now:frase_es})
        }
        if(frase_en){
            const past = tDataCarousel.en
            await tDataCarousel.update({en: frase_en})
            updates.push({path: 'en' , past, now:frase_en})
        }
        if(frase_cat){
            const past = tDataCarousel.cat
            await tDataCarousel.update({cat: frase_cat})
            updates.push({path: 'cat' , past, now:frase_cat})
        }

        if(autor){
            const past = tCarousels.autor
            await tCarousels.update({autor:autor})
            updates.push({path: 'autor', past , now:autor})
        }

        if(link_autor){
            const past = tCarousels.link_autor
            await tCarousels.update({link_autor:link_autor})
            updates.push({path: 'link_autor', past , now:link_autor})
        }

        return res.status(200).json({status: 200, msg: "Updated" , bag:{updates}})

    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos editar carousel en este momento" })
    }
}