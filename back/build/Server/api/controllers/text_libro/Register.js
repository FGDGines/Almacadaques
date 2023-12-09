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
exports.Register = void 0;
const models_1 = require("../../../db/models");
const FileHandler_1 = require("../../../helpers/FileHandler");
const path_1 = __importDefault(require("path"));
const config_1 = require("../../../config/config");
const Register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { title, subtitle, content } = body;
    if (String(title).length > 25) {
        return res.status(200).json({ status: 400, msg: "El titulo debe ser menos de 25 caracteres" });
    }
    if (String(subtitle).length > 25) {
        return res.status(200).json({ status: 400, msg: "El subtitulo debe ser menos de 25 caracteres" });
    }
    try {
        JSON.parse(content);
    }
    catch (error) {
        return res.status(200).json({ status: 400, msg: "El contenido debe ser un array de string" });
    }
    try {
        // @ts-ignore
        if (req.files.src.data) {
            // @ts-ignore
            const url = yield (0, FileHandler_1.UploadFile)(req.files.src.data, path_1.default.join(__dirname, config_1.RelativePath.text_libro), "jpg", config_1.Formatos.image);
            const tTextLibro = new models_1.TextLibro(Object.assign(Object.assign({}, body), { imagen_src: url }));
            yield tTextLibro.save();
            return res.status(200).json({ status: 200, msg: "Text libro registrado", bag: tTextLibro });
        }
        return res.status(200).json({ status: 400, msg: "Debe pasar una imagen" });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No se puede crear text libro" });
    }
});
exports.Register = Register;
