import { Request, Response } from "express";
import { Colaborador } from "../../../db/models"; 
import { DeleteFile, UploadFile } from "../../../helpers/FileHandler";
import path from 'path';
import { Formatos, RelativePath } from "../../../config/config";


export const Update = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id:primaryKey, nombre, cargo, descripcion, contacto} = body
    const updates = []
    try{

        const tColaborador = await Colaborador.findOne({
            where: {
                id : primaryKey  , 
            }, 
            include: [{all:true}]
        })

        if(!tColaborador) return res.status(200).json({status: 400, msg: "El colaborador debe ser válido" })

        if(nombre){
            const past = tColaborador.nombre
            await tColaborador.update({nombre: nombre})
            updates.push({path: 'nombre', past , now: nombre})
        }

        if(cargo){
            const past = tColaborador.cargo
            await tColaborador.update({cargo: cargo})
            updates.push({path: 'cargo', past , now: cargo})
        }

        if(descripcion){
            const past = tColaborador.descripcion
            await tColaborador.update({descripcion: descripcion})
            updates.push({path: 'descripcion', past , now: descripcion})
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