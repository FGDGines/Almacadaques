import { Request, Response } from "express";
import { CalendarEvent } from "../../../db/models";

export const Read = async (req: Request, res: Response) => {
    const { body } = req
    const {  } = body
    try {
        const tCalendarEvent = await CalendarEvent.findAll()

        return res.status(200).json({ status: 200, msg: "Items del calendar event obtenidos con éxito",bag: tCalendarEvent })
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos leer items del calendar event en este momento" })
    }
}