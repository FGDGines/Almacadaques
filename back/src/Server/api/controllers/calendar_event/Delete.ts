import { Request, Response } from "express";
import { CalendarEvent } from "../../../db/models";

export const Delete = async (req: Request, res: Response) => {
    const { body } = req
    const { id } = body
    try{
        const tCalendarEvent = await CalendarEvent.findByPk(id)
        if(!tCalendarEvent) return res.status(200).json({status: 400, msg: "Debe proporcionar un calendar event válido"})

        await tCalendarEvent.destroy()

        return res.status(200).json({status: 200, msg: "Calendar event eliminado"})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos eliminar calendar event en este momento"})
    }
}