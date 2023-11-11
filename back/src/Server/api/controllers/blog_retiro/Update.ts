import { Request, Response } from "express";
import { BlogRetiro, DescriptionLang, TitleLang } from "../../../db/models";
import { UploadFile } from "../../../helpers/FileHandler";
import path from 'path';
import { Formatos, RelativePath } from "../../../config/config";

export const Update = async (req: Request, res: Response) => {
    const { body } = req
    const { id, title_es, title_en, title_cat, description_es, description_en, description_cat, index, day, month, year, image_number, author} = body
    
    const updates = []
    try {
        const tBlogRetiro = await BlogRetiro.findOne({
            where: {
                id: id
            },
            attributes: ["id", "indice", "day", "month", "year", "image", "author"],
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

        if(!tBlogRetiro) return res.status(200).json({status: 404 , msg: 'No existe blog registo con el id ' + id})

        const tTitleLang = tBlogRetiro.title_lang
        const tDescriptionLang = tBlogRetiro.description_lang

        if(title_es){
            const past = tTitleLang.title_es
            await tTitleLang.update({es: title_es})
            updates.push({path: 'title_es', past , now: title_es})
        }
        if(title_en){
            const past = tTitleLang.title_en
            await tTitleLang.update({en: title_en})
            updates.push({path: 'title_en', past , now: title_en})
        }
        if(title_cat){
            const past = tTitleLang.title_cat
            await tTitleLang.update({cat: title_cat})
            updates.push({path: 'title_cat', past , now: title_cat})
        }

        if(description_es){
            const past = tDescriptionLang.description_es
            await tDescriptionLang.update({es: description_es})
            updates.push({path: 'description_es', past , now: description_es})
        }
        if(description_en){
            const past = tDescriptionLang.description_en
            await tDescriptionLang.update({en: description_en})
            updates.push({path: 'description_en', past , now: description_en})
        }
        if(description_cat){
            const past = tDescriptionLang.description_cat
            await tDescriptionLang.update({cat: description_cat})
            updates.push({path: 'description_cat', past , now: description_cat})
        }

        if(index){
            const past = tBlogRetiro.index
            await tBlogRetiro.update({index: index})
            updates.push({path: 'indice', past , now: index})
        }
        if(day){
            const past = tBlogRetiro.day
            await tBlogRetiro.update({day: day})
            updates.push({path: 'day', past , now: day})
        }
        if(month){
            const past = tBlogRetiro.month
            await tBlogRetiro.update({month: month})
            updates.push({path: 'month', past , now: month})
        }
        if(year){
            const past = tBlogRetiro.year
            await tBlogRetiro.update({year: year})
            updates.push({path: 'year', past , now: year})
        }

        // @ts-ignore
        const image = req.files.src.data 
        if(image){
            const past = tBlogRetiro.image
            const json = JSON.parse(past)
            if (json.length <= image_number) {
                return res.status(200).json({ status: 400, msg: "Número de la imagen no válido" })
            }
            // await DeleteFile(past)
            const url = await UploadFile( image, path.join(__dirname,  RelativePath.collaborator), "jpg", Formatos.image)
            json[image_number] = url
            await tBlogRetiro.update({image: json})
            updates.push({path: 'image', past , now: json})
        }
        if(author){
            const past = tBlogRetiro.author
            await tBlogRetiro.update({author: author})
            updates.push({path: 'author', past , now: author})
        }

        console.log(tTitleLang, tDescriptionLang)
        return res.status(200).json({status: 200, msg: "Updated" , tBlogRetiro})

    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos editar colaborador en este momento" })
    }
}