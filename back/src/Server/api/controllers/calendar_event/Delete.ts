import { Request, Response } from "express";
import { CalendarEvent } from "../../../db/models";
import { DeleteFile } from "../../../helpers/FileHandler";
import path from 'path';
import { RelativePath } from "../../../config/config";

export const Delete = async (req: Request, res: Response) => {
    const { body } = req
    const { id } = body
    try{
        const tCalendarEvent = await CalendarEvent.findByPk(id)
        if(!tCalendarEvent) return res.status(200).json({status: 400, msg: "Debe proporcionar un calendar event válido"})

        await tCalendarEvent.destroy()
        const past = tCalendarEvent.src
        if (past) {
            const uploadDir = path.join(__dirname,  RelativePath.calendar_event)
            try {
                 await DeleteFile(path.join(uploadDir, past))     
            } catch (error) {
                
            }
              
        }
        return res.status(200).json({status: 200, msg: "Calendar event eliminado"})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos eliminar calendar event en este momento"})
    }
}