import { Request, Response } from "express";
import { BlogRetiro, DescriptionLang, TitleLang } from "../../../db/models";

export const Read = async (req: Request, res: Response) => {
    const { body } = req
    const { lang } = body
    try {
        const tBlogRetiros = await BlogRetiro.findAll({
            attributes: ["id", "indice", "day", "month", "year", "image", "author"],
            include: [
                {
                    model: TitleLang,
                    attributes:[`${lang}`]
                },
                {
                    model: DescriptionLang,
                    attributes:[`${lang}`]
                }
            ]
        })

        return res.status(200).json({ status: 200, msg: "Blog retiro obtenidos con éxito",bag: tBlogRetiros })
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos leer blog retiro en este momento" })
    }
}