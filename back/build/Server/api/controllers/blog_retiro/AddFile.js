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
exports.AddFile = void 0;
const models_1 = require("../../../db/models");
const FileHandler_1 = require("../../../helpers/FileHandler");
const path_1 = __importDefault(require("path"));
const config_1 = require("../../../config/config");
const AddFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = body;
    const updates = [];
    try {
        const tBlogRetiro = yield models_1.BlogRetiro.findOne({
            where: {
                id: id,
            },
            include: [{ all: true }]
        });
        // @ts-ignore
        const image = req.files.src.data;
        if (image) {
            const past = tBlogRetiro.image;
            const json = JSON.parse(past);
            if (json.length == 3) {
                return res.status(200).json({ status: 400, msg: "Cantidad de imagenes maxima pasada" });
            }
            // await DeleteFile(past)
            const url = yield (0, FileHandler_1.UploadFile)(image, path_1.default.join(__dirname, config_1.RelativePath.blog_retiro), "jpg", config_1.Formatos.image);
            const img = [
                ...json,
                url
            ];
            yield tBlogRetiro.update({ image: img });
            updates.push({ path: 'image', past, now: img });
            if (updates.length)
                return res.status(200).json({ status: 200, msg: 'Imagen agregada', bag: { updates } });
        }
        return res.status(200).json({ status: 400, msg: "Debe pasar una imagen" });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos subir imagen en este momento" });
    }
});
exports.AddFile = AddFile;
