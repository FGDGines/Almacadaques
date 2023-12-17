import { Request, Response } from "express";
import { CalendarEvent } from "../../../db/models";
import { UploadFile } from "../../../helpers/FileHandler";
import path from 'path';
import { Formatos, RelativePath } from "../../../config/config";




export const Create = async (req: Request, res: Response) => {
    const { body } = req
    const { titulo, nombre, descripcion, enlace, inicio, final, fileExtension } = body
    if (titulo != "Actividad" || titulo != "Taller" || titulo != "Evento") {
        return res.status(200).json({ status: 400, msg: "Titulo del calendar event incorrecto" })
    }
    try {
        // @ts-ignore
        if (req.files.src) {
            // @ts-ignore
            const url = await UploadFile( req.files.src.data, path.join(__dirname,  RelativePath.calendar_event), fileExtension, Formatos.image)
            
            const tCarousel = new CalendarEvent({ 
                titulo: titulo, nombre: nombre, descripcion: descripcion, enlace: enlace,
                inicio: inicio, final: final, src: url
             })
            tCarousel.save()

            return res.status(200).json({ status: 200, msg: "Calendar event creado" })

        }else{
            return res.status(200).json({status: 400, msg: "La imagen es obligatoria"})
        }

    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos crear items del calendar event en este momento" })
    }
}