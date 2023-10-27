import { Request, Response } from "express";
import { Testimonio } from "../../../db/models";

export const Update = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id:primaryKey, witness,testimony_es,testimony_en,testimony_cat} = body
    const updates = []
    try{

        const tTestimonio = await Testimonio.findOne({
            where: {
                id : primaryKey  , 
            }, 
            include: [{all:true}]
        })


        if(!tTestimonio) return res.status(200).json({status: 200, msg: "Debe proporcionar un testimonio válido" })

        const tDataTestimonio = tTestimonio.data_testimony 

        if(witness){
            const past = tTestimonio.witness
            await tTestimonio.update({witness})
            updates.push({path: 'witness', past , now: witness})
        }


        if(testimony_es){
            const past = tDataTestimonio.es
            await tDataTestimonio.update({es: testimony_es})

            updates.push({path: 'testimony_es' , past , now: testimony_es})
        }

        if(testimony_cat){
            const past = tDataTestimonio.cat
            await tDataTestimonio.update({cat: testimony_cat})

            updates.push({path: 'testimony_cat' , past , now: testimony_cat})
        }

        if(testimony_en){
            const past = tDataTestimonio.en
            await tDataTestimonio.update({en: testimony_en})

            updates.push({path: 'testimony_en' , past , now: testimony_en})
        }


        if(updates.length)return res.status(200).json({status: 200, msg: 'Testimonio editado', bag:{updates}})
        return res.status(200).json({status: 200, msg: 'No se han realizado ediciones'})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos editar testimonios en este momento"})
    }
}