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
exports.Delete = void 0;
const models_1 = require("../../../db/models");
// import { DeleteFile } from "../../../helpers/FileHandler";
// import path from 'path';
// import { RelativePath } from "../../../config/config";
const Delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = body;
    try {
        const tPodcast = yield models_1.Podcast.findByPk(id);
        if (!tPodcast)
            return res.status(200).json({ status: 400, msg: "Debe proporcionar un podcast válido" });
        // const past = tPodcast.imagen
        // if (past) {
        //     const uploadDir = path.join(__dirname,  RelativePath.podcast)
        //     try {
        //     await DeleteFile(path.join(uploadDir, past))     
        //     } catch (error) {
        //     }   
        // }
        yield tPodcast.destroy();
        return res.status(200).json({ status: 200, msg: "Podcast eliminado" });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos eliminar podcast en este momento" });
    }
});
exports.Delete = Delete;
