import { Request, Response } from "express";

export const Create = async ( req: Request ,res: Response)=>{
    const {body} = req

    try{
        return res.status(200).json({status: 200, msg: "Crear testimonio Online" , body})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: ""})
    }
}