import { Request, Response } from "express";
import { CalendarEvent } from "../../../db/models";

export const Create = async (req: Request, res: Response) => {
    const { body } = req
    const {} = body
    try {
        const tCalendarEvent = new CalendarEvent(body)
        tCalendarEvent.save()

        return res.status(200).json({ status: 200, msg: "Calendar event Item Creado" })
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos crear items del calendar event en este momento" })
    }
}