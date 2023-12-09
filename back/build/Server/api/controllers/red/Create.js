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
const config_1 = require("../../../config/config");
const models_1 = require("../../../db/models");
const FileHandler_1 = require("../../../helpers/FileHandler");
const path_1 = __importDefault(require("path"));
const Create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const {} = body;
    try {
        // @ts-ignore
        const image = req.files.src.data;
        if (image) {
            const img = yield (0, FileHandler_1.UploadFile)(image, path_1.default.join(__dirname, config_1.RelativePath.red), "jpg", config_1.Formatos.image);
            const tRed = new models_1.Red(Object.assign(Object.assign({}, body), { archivo: img }));
            yield tRed.save();
            return res.status(200).json({ status: 200, msg: "Red registrada", bag: tRed });
        }
        return res.status(200).json({ status: 400, msg: "El archivo es obligatorio" });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No se puede crear red" });
    }
});
exports.Create = Create;
