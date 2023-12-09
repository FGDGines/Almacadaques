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
    const { frase_es, frase_en, frase_cat, autor, link_autor, fileExtension } = body;
    try {
        // @ts-ignore
        if (req.files.src) {
            // @ts-ignore
            const url = yield (0, FileHandler_1.UploadFile)(req.files.src.data, path_1.default.join(__dirname, config_1.RelativePath.carousel), fileExtension, config_1.Formatos.image);
            const tDataCarousel = new models_1.DataCarousel({ es: frase_es, en: frase_en, cat: frase_cat });
            yield tDataCarousel.save();
            const tCarousel = new models_1.Carousel({ id_data_carousel: tDataCarousel.id, src: url, autor, link_autor });
            tCarousel.save();
            return res.status(200).json({ status: 200, msg: "Carousel Item Creado" });
        }
        else {
            return res.status(200).json({ status: 400, msg: "La imagen es obligatoria" });
        }
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos crear items del carousel en este momento" });
    }
});
exports.Create = Create;
