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
exports.Create = void 0;
const models_1 = require("../../../db/models");
const FileHandler_1 = require("../../../helpers/FileHandler");
const path_1 = __importDefault(require("path"));
const config_1 = require("../../../config/config");
const Create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { title_es, title_en, title_cat, description_es, description_en, description_cat, index, day, month, year, author, estado } = body;
    if (estado != "Plazas limitadas" && estado != "Completo" && estado != "Aplazado") {
        return res.status(200).json({ status: 400, msg: "Estado del blog retiro incorrecto" });
    }
    try {
        // @ts-ignore
        const image = req.files.src.data;
        if (image) {
            const url = yield (0, FileHandler_1.UploadFile)(image, path_1.default.join(__dirname, config_1.RelativePath.blog_retiro), "jpg", config_1.Formatos.image);
            const tTitleLang = new models_1.TitleLang({ es: title_es, en: title_en, cat: title_cat });
            yield tTitleLang.save();
            const tDescriptionLang = new models_1.DescriptionLang({ es: description_es, en: description_en, cat: description_cat });
            yield tDescriptionLang.save();
            const tBlogRetiro = new models_1.BlogRetiro({ indice: index, day: day, month: month, year: year, image: [url],
                id_title_lang: tTitleLang.id, author: author, id_description_lang: tTitleLang.id, estado: estado });
            yield tBlogRetiro.save();
            return res.status(200).json({ status: 200, msg: "Blog Retiro Creado" });
        }
        return res.status(200).json({ status: 400, msg: "Debe pasar una imagen" });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos crear blog retiro en este momento" });
    }
});
exports.Create = Create;
