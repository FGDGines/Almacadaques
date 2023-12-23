import { Request, Response } from "express";
import { CalendarEvent } from "../../../db/models";
import { DeleteFile, UploadFile } from "../../../helpers/FileHandler";
import path from 'path';
import { Formatos, RelativePath } from "../../../config/config";

export const Update = async (req: Request, res: Response) => {
    const { body } = req
    const { id, titulo, inicio, final, descripcion, nombre, enlace, fileExtension } = body
    const updates = []
    try {
        const tCalendarEvent = await CalendarEvent.findOne({
            where: {
                id: id
            }
        })

        if(!tCalendarEvent) return res.status(200).json({status: 404 , msg: 'No existe calendar event con el id ' + id})

        if(titulo){
            if (titulo != "Experiencia" && titulo != "Taller" && titulo != "Evento" && titulo != "Happy Dance" && titulo != "Happy Adventure" && titulo != "Happy Nature" && titulo != "Magic Heart" && titulo != "Magic Breath") {
                return res.status(200).json({ status: 400, msg: "Titulo del calendar event incorrecto" })
            }
            
            const past = tCalendarEvent.titulo
            await tCalendarEvent.update({titulo: titulo})
            updates.push({path: 'titulo' , past, now:titulo})
        }
        if(inicio){
            const past = tCalendarEvent.inicio
            await tCalendarEvent.update({inicio: inicio})
            updates.push({path: 'inicio' , past, now:inicio})
        }
        if(final){
            const past = tCalendarEvent.final
            await tCalendarEvent.update({final: final})
            updates.push({path: 'final' , past, now:final})
        }

        if(descripcion){
            const past = tCalendarEvent.descripcion
            await tCalendarEvent.update({descripcion:descripcion})
            updates.push({path: 'descripcion', past , now:descripcion})
        }
        if(nombre){
            const past = tCalendarEvent.nombre
            await tCalendarEvent.update({nombre: nombre})
            updates.push({path: 'nombre' , past, now:nombre})
        }
        if(enlace){
            const past = tCalendarEvent.enlace
            await tCalendarEvent.update({enlace:enlace})
            updates.push({path: 'enlace', past , now:enlace})
        }

        try {
            // @ts-ignore
            const src = req.files.src.data
            if (src != undefined) {
                const past = tCalendarEvent.src
                if (past) {
                    const uploadDir = path.join(__dirname,  RelativePath.calendar_event)
                    try {
                         await DeleteFile(path.join(uploadDir, past))     
                    } catch (error) {
                        
                    }
                      
                }
                const url = await UploadFile( src, path.join(__dirname,  RelativePath.calendar_event), fileExtension, Formatos.image)
                await tCalendarEvent.update({src: url})
                updates.push({path: 'src', past , now: url})
            }
        } catch (error) {}

        return res.status(200).json({status: 200, msg: "Updated" , bag:{updates}})

    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos editar calendar event en este momento" })
    }
}