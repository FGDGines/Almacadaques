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
const models_1 = require("../../../db/models");
// import { DeleteFile, UploadFile } from "../../../helpers/FileHandler";
// import path from 'path';
// import { Formatos, RelativePath } from "../../../config/config";
const Update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id: primaryKey, url, titulo, autor, fecha, categoria } = body;
    const updates = [];
    try {
        const tPodcast = yield models_1.Podcast.findOne({
            where: {
                id: primaryKey,
            },
            include: [{ all: true }]
        });
        if (!tPodcast)
            return res.status(200).json({ status: 400, msg: "El podcast debe ser válido" });
        if (categoria) {
            if (categoria != "Libros con Alma" && categoria != "Experiencias Almacadaqués" && categoria != "Meditaciones" && categoria != "Almas Inspiradoras") {
                return res.status(200).json({ status: 400, msg: "Categoria incorrecta" });
            }
            const past = tPodcast.categoria;
            yield tPodcast.update({ categoria: categoria });
            updates.push({ path: 'categoria', past, now: categoria });
        }
        if (url) {
            const past = tPodcast.url;
            yield tPodcast.update({ url: url });
            updates.push({ path: 'url', past, now: url });
        }
        if (titulo) {
            const past = tPodcast.titulo;
            yield tPodcast.update({ titulo: titulo });
            updates.push({ path: 'titulo', past, now: titulo });
        }
        if (autor) {
            const past = tPodcast.autor;
            yield tPodcast.update({ autor: autor });
            updates.push({ path: 'autor', past, now: autor });
        }
        // sin el try si no mandas foto da error
        // try {
        //     // @ts-ignore
        //     const imagen = req.files.src.data
        //     if(imagen){
        //         const past = tPodcast.imagen
        //         if (past) {
        //             const uploadDir = path.join(__dirname,  RelativePath.podcast)
        //             try {
        //             await DeleteFile(path.join(uploadDir, past))     
        //             } catch (error) {
        //             }   
        //         }
        //         const url = await UploadFile( imagen, path.join(__dirname,  RelativePath.podcast), "jpg", Formatos.image)
        //         await tPodcast.update({imagen: url})
        //         updates.push({path: 'imagen', past , now: url})
        //     }
        // } catch (error) {}
        if (fecha) {
            const past = tPodcast.fecha;
            yield tPodcast.update({ fecha: fecha });
            updates.push({ path: 'fecha', past, now: fecha });
        }
        if (updates.length)
            return res.status(200).json({ status: 200, msg: 'Podcast editado', bag: { updates } });
        return res.status(200).json({ status: 200, msg: 'No se han realizado ediciones' });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos editar podcast en este momento" });
    }
});
exports.Update = Update;
