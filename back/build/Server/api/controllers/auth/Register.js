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
const bcrypt_1 = __importDefault(require("bcrypt"));
const FileHandler_1 = require("../../../helpers/FileHandler");
const path_1 = __importDefault(require("path"));
const config_1 = require("../../../config/config");
const Register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { nombre, correo, password, fileExtension } = body;
    let tDataUser = null;
    let tUser = null;
    try {
        // @ts-ignore
        const image = req.files.src;
        if (image) {
            const url = yield (0, FileHandler_1.UploadFile)(image.data, path_1.default.join(__dirname, config_1.RelativePath.auth), fileExtension, config_1.Formatos.image);
            tDataUser = new models_1.DataUser({ nombre, id_rol: 1, src: url });
            yield tDataUser.save();
            const id_data_user = tDataUser.id;
            tUser = new models_1.User({ correo, password, id_data_user });
            const salt = bcrypt_1.default.genSaltSync(10);
            const password_hash = bcrypt_1.default.hashSync(password, salt);
            tUser.password = password_hash;
            yield tUser.save();
            return res.status(200).json({ status: 200, msg: "Usuario registrado" });
        }
        else {
            return res.status(200).json({ status: 200, msg: "Necesario foto" });
        }
    }
    catch (err) {
        try {
            if (tDataUser) {
                tDataUser.destroy();
            }
            return res.status(200).json({ status: 500, err, msg: "No podemos Crear Usuarios en este momento" });
        }
        catch (err) {
            return res.status(200).json({ status: 500, err, msg: "No podemos Crear Usuarios en este momento" });
        }
    }
});
exports.Register = Register;
