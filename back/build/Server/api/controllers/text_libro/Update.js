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
    const { id: primaryKey, title, subtitle, content } = body;
    const updates = [];
    try {
        const tTextLibro = yield models_1.TextLibro.findOne({
            where: {
                id: primaryKey,
            },
            include: [{ all: true }]
        });
        if (!tTextLibro)
            return res.status(200).json({ status: 400, msg: "El podcast debe ser válido" });
        if (title) {
            const past = tTextLibro.title;
            yield tTextLibro.update({ title: title });
            updates.push({ path: 'title', past, now: title });
        }
        if (subtitle) {
            const past = tTextLibro.subtitle;
            yield tTextLibro.update({ subtitle: subtitle });
            updates.push({ path: 'subtitle', past, now: subtitle });
        }
        if (content) {
            const past = tTextLibro.content;
            yield tTextLibro.update({ content: content });
            updates.push({ path: 'content', past, now: content });
        }
        // sin el try si no mandas foto da error
        try {
            // @ts-ignore
            const imagen = req.files.src.data;
            if (imagen) {
                const past = tTextLibro.imagen_src;
                if (past) {
                    const uploadDir = path_1.default.join(__dirname, config_1.RelativePath.text_libro);
                    try {
                        yield (0, FileHandler_1.DeleteFile)(path_1.default.join(uploadDir, past));
                    }
                    catch (error) {
                    }
                }
                const url = yield (0, FileHandler_1.UploadFile)(imagen, path_1.default.join(__dirname, config_1.RelativePath.text_libro), "jpg", config_1.Formatos.image);
                yield tTextLibro.update({ imagen_src: url });
                updates.push({ path: 'imagen', past, now: url });
            }
        }
        catch (error) { }
        if (updates.length)
            return res.status(200).json({ status: 200, msg: 'Text libro editado', bag: { updates } });
        return res.status(200).json({ status: 200, msg: 'No se han realizado ediciones' });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos editar text libro en este momento" });
    }
});
exports.Update = Update;
