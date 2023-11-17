import { Request, Response } from "express";
import { Carousel, DataCarousel } from "../../../db/models";
import { UploadFile } from "../../../helpers/FileHandler";
import path from 'path';
import { Formatos, RelativePath } from "../../../config/config";




export const Create = async (req: Request, res: Response) => {
    const { body } = req
    const { frase_es, frase_en, frase_cat, autor, link_autor, fileExtension } = body
    try {
        // @ts-ignore
        if (req.files.src) {
            // @ts-ignore
            const url = await UploadFile( req.files.src.data, path.join(__dirname,  RelativePath.carousel), fileExtension, Formatos.image)

            const tDataCarousel = new DataCarousel({ es: frase_es, en: frase_en, cat: frase_cat })
            await tDataCarousel.save()

            const tCarousel = new Carousel({ id_data_carousel: tDataCarousel.id, src: url, autor, link_autor })
            tCarousel.save()

            return res.status(200).json({ status: 200, msg: "Carousel Item Creado" })

        }else{
            return res.status(200).json({status: 400, msg: "La imagen es obligatoria"})
        }

    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos crear items del carousel en este momento" })
    }
}