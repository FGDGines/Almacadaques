import { Request, Response } from "express";

export const Test = async (req: Request, res: Response) => {
    const { body } = req
    const {h} = body 
    try { 
        // @ts-ignore
        const src = req.files.src.data

        console.log(src, h)
        
        return res.status(200).json({status: 200, msg: "Updated" , bag:{src}})

    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos editar carousel en este momento" })
    }
}