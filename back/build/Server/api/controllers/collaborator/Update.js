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
    const { id: primaryKey, nombre, cargo, descripcion, contacto } = body;
    const updates = [];
    try {
        const tColaborador = yield models_1.Colaborador.findOne({
            where: {
                id: primaryKey,
            },
            include: [{ all: true }]
        });
        if (!tColaborador)
            return res.status(200).json({ status: 400, msg: "El colaborador debe ser válido" });
        if (nombre) {
            const past = tColaborador.nombre;
            yield tColaborador.update({ nombre: nombre });
            updates.push({ path: 'nombre', past, now: nombre });
        }
        if (cargo) {
            const past = tColaborador.cargo;
            yield tColaborador.update({ cargo: cargo });
            updates.push({ path: 'cargo', past, now: cargo });
        }
        if (descripcion) {
            const past = tColaborador.descripcion;
            yield tColaborador.update({ descripcion: descripcion });
            updates.push({ path: 'descripcion', past, now: descripcion });
        }
        // @ts-ignore
        const imagen = req.files.src.data;
        if (imagen) {
            const past = tColaborador.imagen;
            if (past) {
                const uploadDir = path_1.default.join(__dirname, config_1.RelativePath.collaborator);
                yield (0, FileHandler_1.DeleteFile)(path_1.default.join(uploadDir, past));
            }
            const url = yield (0, FileHandler_1.UploadFile)(imagen, path_1.default.join(__dirname, config_1.RelativePath.collaborator), "jpg", config_1.Formatos.image);
            yield tColaborador.update({ imagen: url });
            updates.push({ path: 'imagen', past, now: url });
        }
        if (contacto) {
            const past = tColaborador.contacto;
            yield tColaborador.update({ contacto: contacto });
            updates.push({ path: 'contacto', past, now: contacto });
        }
        if (updates.length)
            return res.status(200).json({ status: 200, msg: 'Colaborador editado', bag: { updates } });
        return res.status(200).json({ status: 200, msg: 'No se han realizado ediciones' });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos editar colaborador en este momento" });
    }
});
exports.Update = Update;
