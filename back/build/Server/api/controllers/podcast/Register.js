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
exports.Register = void 0;
const models_1 = require("../../../db/models");
// import { UploadFile } from "../../../helpers/FileHandler";
// import path from 'path';
// import { Formatos, RelativePath } from "../../../config/config";
const Register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { url, titulo, autor, fecha, categoria } = body;
    if (categoria != "Libros con Alma" && categoria != "Experiencias Almacadaqués" && categoria != "Meditaciones" && categoria != "Almas Inspiradoras") {
        return res.status(200).json({ status: 400, msg: "Categoria incorrecta" });
    }
    try {
        // @ts-ignore
        // if (req.files.src.data) {
        //     // @ts-ignore
        //     const url = await UploadFile( req.files.src.data, path.join(__dirname,  RelativePath.podcast), "jpg", Formatos.image)
        //     const tPodcast = new Podcast({
        //         ...body,
        //         imagen: url
        //     })
        //     await tPodcast.save();
        //     return res.status(200).json({ status: 200, msg: "Podcast registrado", bag: tPodcast})
        // }
        // return res.status(200).json({ status: 400, msg: "Debe pasar una imagen"})
        const tPodcast = new models_1.Podcast({
            autor: autor,
            url: url,
            titulo: titulo,
            fecha: fecha,
            categoria: categoria,
            imagen: ""
        });
        yield tPodcast.save();
        return res.status(200).json({ status: 200, msg: "Podcast registrado", bag: tPodcast });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No se puede crear podcast" });
    }
});
exports.Register = Register;
