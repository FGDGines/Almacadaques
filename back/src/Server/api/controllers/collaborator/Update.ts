import { Request, Response } from "express";
import { Colaborador } from "../../../db/models"; 
import { DeleteFile, UploadFile } from "../../../helpers/FileHandler";
import path from 'path';
import { Formatos, RelativePath } from "../../../config/config";


export const Update = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id:primaryKey, nombre_es, cargo_es, descripcion_es, nombre_en, cargo_en, descripcion_en, nombre_cat, cargo_cat, descripcion_cat, contacto} = body
    const updates = []
    try{

        const tColaborador = await Colaborador.findOne({
            where: {
                id : primaryKey  , 
            }, 
            include: [{all:true}]
        })

        if(!tColaborador) return res.status(200).json({status: 400, msg: "El colaborador debe ser válido" })

        if(nombre_es){
            const past = tColaborador.nombre_es
            await tColaborador.update({nombre_es: nombre_es})
            updates.push({path: 'nombre_es', past , now: nombre_es})
        }

        if(cargo_es){
            const past = tColaborador.cargo_es
            await tColaborador.update({cargo_es: cargo_es})
            updates.push({path: 'cargo_es', past , now: cargo_es})
        }

        if(descripcion_es){
            const past = tColaborador.descripcion_es
            await tColaborador.update({descripcion_es: descripcion_es})
            updates.push({path: 'descripcion_es', past , now: descripcion_es})
        }


        if(nombre_en){
            const past = tColaborador.nombre_en
            await tColaborador.update({nombre_en: nombre_en})
            updates.push({path: 'nombre_en', past , now: nombre_en})
        }

        if(cargo_en){
            const past = tColaborador.cargo_en
            await tColaborador.update({cargo_en: cargo_en})
            updates.push({path: 'cargo_en', past , now: cargo_en})
        }

        if(descripcion_en){
            const past = tColaborador.descripcion_en
            await tColaborador.update({descripcion_en: descripcion_en})
            updates.push({path: 'descripcion_en', past , now: descripcion_en})
        }


        if(nombre_cat){
            const past = tColaborador.nombre_cat
            await tColaborador.update({nombre_cat: nombre_cat})
            updates.push({path: 'nombre_cat', past , now: nombre_cat})
        }

        if(cargo_cat){
            const past = tColaborador.cargo_cat
            await tColaborador.update({cargo_cat: cargo_cat})
            updates.push({path: 'cargo_cat', past , now: cargo_cat})
        }

        if(descripcion_cat){
            const past = tColaborador.descripcion_cat
            await tColaborador.update({descripcion_cat: descripcion_cat})
            updates.push({path: 'descripcion_cat', past , now: descripcion_cat})
        }

        try {
            // @ts-ignore
            const imagen = req.files.src.data
            if(imagen){
                const past = tColaborador.imagen
                if (past) {
                    const uploadDir = path.join(__dirname,  RelativePath.collaborator)
                    try {
                        
                    await DeleteFile(path.join(uploadDir, past))  
                    } catch (error) {
                        
                    }      
                }
                const url = await UploadFile( imagen, path.join(__dirname,  RelativePath.collaborator), "jpg", Formatos.image)
                await tColaborador.update({imagen: url})
                updates.push({path: 'imagen', past , now: url})
            }
        } catch (error) {}

        if(contacto){
            const past = tColaborador.contacto
            await tColaborador.update({contacto:contacto})
            updates.push({path: 'contacto', past , now:contacto})
        }

        if(updates.length)return res.status(200).json({status: 200, msg: 'Colaborador editado', bag:{updates}})
        return res.status(200).json({status: 200, msg: 'No se han realizado ediciones'})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos editar colaborador en este momento"})
    }
}