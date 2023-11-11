import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export const UploadFile = (blob: string, uploadDir: string, fileExtension: string, validExtensions: string[]) => {
    console.log(blob)
    return new Promise((resolve, reject) => {

        if (!blob) return reject('Blob de imagen no proporcionado.');

        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

        if (!validExtensions.includes(fileExtension)) return reject('Extensión de archivo no válida.');

        const randomFileName = uuidv4() + '.' + fileExtension;
        const destinationPath = path.join(uploadDir, randomFileName);

        fs.writeFile(destinationPath, blob, 'binary', (err) => {
            if (err) return reject(err);
            resolve(randomFileName);
        });
    });
};

export const DeleteFile = (filePath:string) => {
    return new Promise((resolve, reject) => {
        if (!filePath) {
            return reject(new Error('Ruta del archivo no proporcionada.'));
        }

        fs.unlink(filePath, (err) => {
            if (err) {
                return reject(err);
            }
            resolve('Archivo eliminado correctamente.');
        });
    });
};
