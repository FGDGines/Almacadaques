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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Update = void 0;
const models_1 = require("../../../db/models");
const FileHandler_1 = require("../../../helpers/FileHandler");
const path_1 = __importDefault(require("path"));
const config_1 = require("../../../config/config");
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
        try {
            // @ts-ignore
            const imagen = req.files.src.data;
            if (imagen) {
                const past = tPodcast.imagen;
                if (past) {
                    const uploadDir = path_1.default.join(__dirname, config_1.RelativePath.podcast);
                    try {
                        yield (0, FileHandler_1.DeleteFile)(path_1.default.join(uploadDir, past));
                    }
                    catch (error) {
                    }
                }
                const url = yield (0, FileHandler_1.UploadFile)(imagen, path_1.default.join(__dirname, config_1.RelativePath.podcast), "jpg", config_1.Formatos.image);
                yield tPodcast.update({ imagen: url });
                updates.push({ path: 'imagen', past, now: url });
            }
        }
        catch (error) { }
        if (fecha) {
            const past = tPodcast.fecha;
            yield tPodcast.update({ fecha: fecha });
            updates.push({ path: 'fecha', past, now: fecha });
        }
        if (categoria) {
            const past = tPodcast.categoria;
            yield tPodcast.update({ categoria: categoria });
            updates.push({ path: 'categoria', past, now: categoria });
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
