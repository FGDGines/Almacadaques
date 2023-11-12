import { Request, Response } from "express";
import { BlogRetiro, DescriptionLang, TitleLang } from "../../../db/models"; 
import { UploadFile } from "../../../helpers/FileHandler";
import path from 'path';
import { Formatos, RelativePath } from "../../../config/config";




export const Create = async (req: Request, res: Response) => {
    const { body } = req
    const { title_es, title_en, title_cat, description_es, description_en, description_cat, index, day, month, year, author } = body

    try {
        // @ts-ignore
        const image = req.files.src.data 
        console.log(image)
        if (image) {
            const url = await UploadFile( image, path.join(__dirname,  RelativePath.blog_retiro), "jpg", Formatos.image)
        
            const tTitleLang = new TitleLang({ es: title_es, en: title_en, cat: title_cat })
            await tTitleLang.save()
            const tDescriptionLang = new DescriptionLang({ es: description_es, en: description_en, cat: description_cat })
            await tDescriptionLang.save()
    
            const tBlogRetiro = new BlogRetiro({indice: index, day: day, month: month, year: year, image: [url],
                id_title_lang: tTitleLang.id, author: author, id_description_lang: tTitleLang.id })
            await tBlogRetiro.save()
    
            return res.status(200).json({ status: 200, msg: "Blog Retiro Creado" })
        }
        return res.status(200).json({ status: 400, msg: "Debe pasar una imagen" })
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos crear blog retiro en este momento" })
    }
}