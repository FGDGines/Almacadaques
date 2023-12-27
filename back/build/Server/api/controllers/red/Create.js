"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = void 0;
// import { Formatos, RelativePath } from "../../../config/config";
const models_1 = require("../../../db/models");
// import { UploadFile } from "../../../helpers/FileHandler";
// import path from 'path';
const Create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const {} = body;
    try {
        // @ts-ignore
        // const image = req.files.src.data 
        // if (image) {
        //     const img = await UploadFile( image, path.join(__dirname,  RelativePath.red), "jpg", Formatos.image)
        //     const tRed = new Red({
        //         ...body,
        //         archivo: img
        //     })
        //     await tRed.save();
        //     return res.status(200).json({ status: 200, msg: "Red registrada", bag: tRed})
        // }
        const tRed = new models_1.Red(Object.assign(Object.assign({}, body), { archivo: "" }));
        yield tRed.save();
        return res.status(200).json({ status: 200, msg: "Red registrada", bag: tRed });
        // return res.status(200).json({ status: 400, msg: "El archivo es obligatorio" })
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No se puede crear red" });
    }
});
exports.Create = Create;
