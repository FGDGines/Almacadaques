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
exports.Update = void 0;
// import { Formatos, RelativePath } from "../../../config/config";
// import path from 'path';
const models_1 = require("../../../db/models");
// import { DeleteFile, UploadFile } from "../../../helpers/FileHandler";
const Update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id: primaryKey, url, cuenta } = body;
    const updates = [];
    try {
        const tRed = yield models_1.Red.findOne({
            where: {
                id: primaryKey,
            },
            include: [{ all: true }]
        });
        if (!tRed)
            return res.status(200).json({ status: 400, msg: "La red debe ser válida" });
        if (url) {
            const past = tRed.url;
            yield tRed.update({ url: url });
            updates.push({ path: 'url', past, now: url });
        }
        if (cuenta) {
            const past = tRed.cuenta;
            yield tRed.update({ cuenta: cuenta });
            updates.push({ path: 'cuenta', past, now: cuenta });
        }
        // try {
        //     // @ts-ignore
        //     const imagen = req.files.src.data
        //     if(imagen){
        //         const past = tRed.archivo
        //         if (past) {
        //             const uploadDir = path.join(__dirname,  RelativePath.red)
        //             try {
        //                 await DeleteFile(path.join(uploadDir, past))   
        //             } catch (error) {}     
        //         }
        //         const img = await UploadFile( imagen, path.join(__dirname,  RelativePath.red), "jpg", Formatos.image)
        //         await tRed.update({archivo: img})
        //         updates.push({path: 'archivo', past , now: img})
        //     }
        // } catch (error) {}
        if (updates.length)
            return res.status(200).json({ status: 200, msg: 'Red editada', bag: { updates } });
        return res.status(200).json({ status: 200, msg: 'No se han realizado ediciones' });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos editar red en este momento" });
    }
});
exports.Update = Update;
