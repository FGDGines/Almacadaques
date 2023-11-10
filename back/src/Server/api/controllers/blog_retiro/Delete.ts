import { Request, Response } from "express";
import { BlogRetiro, DescriptionLang, TitleLang } from "../../../db/models"; 

export const Delete = async (req: Request, res: Response) => {
    const { body } = req
    const { id } = body

    try {
        const tBlogRetiro = await BlogRetiro.findOne({
            where: {
                id: id
            },
            attributes: ['id'],
            include: [
                {
                    model: TitleLang,
                    attributes:['id']
                },
                {
                    model: DescriptionLang,
                    attributes:['id']
                }
            ]
        })

        if(!tBlogRetiro) return res.status(200).json({status: 400, msg: 'Debe proporcionar un blog retiro válido'})
  
        const tTitleLang = tBlogRetiro.title_lang
        const tDescriptionLang = tBlogRetiro.description_lang

        await tBlogRetiro.destroy()
        await tTitleLang.destroy()
        await tDescriptionLang.destroy()

        return res.status(200).json({ status: 200, msg: "Blog retiro eliminado"})
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos eliminar blog retiro en este momento" })
    }
}