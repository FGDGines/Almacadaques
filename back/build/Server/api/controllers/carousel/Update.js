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
    const { id, frase_es, frase_en, frase_cat, autor, link_autor, fileExtension } = body;
    const updates = [];
    try {
        const tCarousels = yield models_1.Carousel.findOne({
            where: {
                id: id
            },
            include: [
                {
                    model: models_1.DataCarousel
                }
            ]
        });
        if (!tCarousels)
            return res.status(200).json({ status: 404, msg: 'No existe carousel con el id ' + id });
        try {
            // @ts-ignore
            const src = req.files.src.data;
            if (src != undefined) {
                const past = tCarousels.src;
                if (past) {
                    const uploadDir = path_1.default.join(__dirname, config_1.RelativePath.carousel);
                    try {
                        yield (0, FileHandler_1.DeleteFile)(path_1.default.join(uploadDir, past));
                    }
                    catch (error) {
                    }
                }
                const url = yield (0, FileHandler_1.UploadFile)(src, path_1.default.join(__dirname, config_1.RelativePath.carousel), fileExtension, config_1.Formatos.image);
                yield tCarousels.update({ src: url });
                updates.push({ path: 'src', past, now: url });
            }
        }
        catch (error) { }
        const idC = tCarousels.id_data_carousel;
        const tDataCarousel = yield models_1.DataCarousel.findOne({
            where: {
                id: idC
            }
        });
        if (frase_es) {
            const past = tDataCarousel.es;
            yield tDataCarousel.update({ es: frase_es });
            updates.push({ path: 'es', past, now: frase_es });
        }
        if (frase_en) {
            const past = tDataCarousel.en;
            yield tDataCarousel.update({ en: frase_en });
            updates.push({ path: 'en', past, now: frase_en });
        }
        if (frase_cat) {
            const past = tDataCarousel.cat;
            yield tDataCarousel.update({ cat: frase_cat });
            updates.push({ path: 'cat', past, now: frase_cat });
        }
        if (autor) {
            const past = tCarousels.autor;
            yield tCarousels.update({ autor: autor });
            updates.push({ path: 'autor', past, now: autor });
        }
        if (link_autor) {
            const past = tCarousels.link_autor;
            yield tCarousels.update({ link_autor: link_autor });
            updates.push({ path: 'link_autor', past, now: link_autor });
        }
        return res.status(200).json({ status: 200, msg: "Updated", bag: { updates } });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos editar carousel en este momento" });
    }
});
exports.Update = Update;
