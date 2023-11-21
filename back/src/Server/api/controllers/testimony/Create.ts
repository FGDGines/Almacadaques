import { Request, Response } from "express";
import { DataTestimonio, Testimonio } from "../../../db/models";

export const Create = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {witness,testimony_es,testimony_en,testimony_cat}  = body

    try{
        console.log(testimony_es)
        const tDataTestimonio = new DataTestimonio({es:testimony_es , cat:testimony_cat, en:testimony_en})
        await tDataTestimonio.save()

        const tTestimonio = new Testimonio({witness, id_data: tDataTestimonio.id})
        await tTestimonio.save()

        return res.status(200).json({status: 200, msg: "Testimonio Creado" })
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos crear testimonios en este momento"})
    }
}