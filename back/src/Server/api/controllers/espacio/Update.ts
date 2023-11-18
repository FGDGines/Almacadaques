import { Request, Response } from "express";
import { Espacio } from "../../../db/models";

export const Update = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id:primaryKey, text_es, text_en, text_cat} = body
    const updates = []
    try{

        const tEspacio = await Espacio.findOne({
            where: {
                id : primaryKey  , 
            }, 
            include: [{all:true}]
        })

        if(!tEspacio) return res.status(200).json({status: 400, msg: "El espacio debe ser válido" })

        if(text_es){
            const past = tEspacio.es
            await tEspacio.update({es: text_es})
            updates.push({path: 'text_es', past , now: text_es})
        }

        if(text_en){
            const past = tEspacio.en
            await tEspacio.update({en: text_en})
            updates.push({path: 'text_en', past , now: text_en})
        }

        if(text_cat){
            const past = tEspacio.cat
            await tEspacio.update({cat: text_cat})
            updates.push({path: 'text_cat', past , now: text_cat})
        }

        if(updates.length)return res.status(200).json({status: 200, msg: 'Espacio editado', bag:{updates}})
        return res.status(200).json({status: 200, msg: 'No se han realizado ediciones'})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos editar espacio en este momento"})
    }
}