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
    try {
        // @ts-ignore
        if (req.files.src.data) {
            // @ts-ignore
            const url = yield (0, FileHandler_1.UploadFile)(req.files.src.data, path_1.default.join(__dirname, config_1.RelativePath.collaborator), "jpg", config_1.Formatos.image);
            const r = Object.assign(Object.assign({}, body), { imagen: url });
            const tColaborador = new models_1.Colaborador(r);
            yield tColaborador.save();
            return res.status(200).json({ status: 200, msg: "Colaborador registrado", bag: tColaborador });
        }
        return res.status(200).json({ status: 400, msg: "Debe pasar una imagen" });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No se puede crear colaborador" });
    }
});
exports.Register = Register;
