"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFile = exports.UploadFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const UploadFile = (blob, uploadDir, fileExtension, validExtensions) => {
    return new Promise((resolve, reject) => {
        if (!blob)
            return reject('Blob de imagen no proporcionado.');
        if (!fs_1.default.existsSync(uploadDir))
            fs_1.default.mkdirSync(uploadDir, { recursive: true });
        if (!validExtensions.includes(fileExtension))
            return reject('Extensión de archivo no válida.');
        const randomFileName = (0, uuid_1.v4)() + '.' + fileExtension;
        const destinationPath = path_1.default.join(uploadDir, randomFileName);
        fs_1.default.writeFile(destinationPath, blob, 'binary', (err) => {
            if (err)
                return reject(err);
            resolve(randomFileName);
        });
    });
};
exports.UploadFile = UploadFile;
const DeleteFile = (filePath) => {
    return new Promise((resolve, reject) => {
        if (!filePath) {
            return reject(new Error('Ruta del archivo no proporcionada.'));
        }
        fs_1.default.unlink(filePath, (err) => {
            if (err) {
                return reject(err);
            }
            resolve('Archivo eliminado correctamente.');
        });
    });
};
exports.DeleteFile = DeleteFile;
