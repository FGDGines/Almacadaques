import { Request, Response } from "express";
import { BlogRetiro, DescriptionLang, TitleLang } from "../../../db/models"; 
import { DeleteFile } from "../../../helpers/FileHandler";
import path from 'path';
import { RelativePath } from "../../../config/config";

export const Delete = async (req: Request, res: Response) => {
    const { body } = req
    const { id } = body

    try {
        const tBlogRetiro = await BlogRetiro.findOne({
            where: {
                id: id
            },
            attributes: ['id', "image"],
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
  
        const past = tBlogRetiro.image
        const json: string[] = JSON.parse(past)
        if (json.length > 0) {
            for (let index = 0; index < json.length; index++) {
                const element = json[index];
                const uploadDir = path.join(__dirname,  RelativePath.blog_retiro)
                try {
                    await DeleteFile(path.join(uploadDir, element))
                } catch (error) {}            
            }
        }
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