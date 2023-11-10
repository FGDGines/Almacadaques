import { Request, Response } from "express";
import { BlogRetiro, DescriptionLang, TitleLang } from "../../../db/models"; 




export const Create = async (req: Request, res: Response) => {
    const { body } = req
    const { title_es, title_en, title_cat, description_es, description_en, description_cat, index, day, month, year, image, author } = body

    try {
        const tTitleLang = new TitleLang({ es: title_es, en: title_en, cat: title_cat })
        await tTitleLang.save()
        const tDescriptionLang = new DescriptionLang({ es: description_es, en: description_en, cat: description_cat })
        await tDescriptionLang.save()

        const tBlogRetiro = new BlogRetiro({indice: index, day: day, month: month, year: year, image: image,
            id_title_lang: tTitleLang.id, author: author, id_description_lang: tTitleLang.id })
        await tBlogRetiro.save()

        return res.status(200).json({ status: 200, msg: "Blog Retiro Creado" })
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos crear blog retiro en este momento" })
    }
}