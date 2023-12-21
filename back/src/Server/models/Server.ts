import express, { request, response } from 'express';
import cors from 'cors';
import https from 'https';
import fs from 'fs';
import path from 'path'
import DB from '../db/conexion';
const fileUpload = require("express-fileupload")

class Server {
    __app: any;
    __PORT: number;

    constructor(port: number) {
        this.__PORT = port;
        this.__app = express();
        this.middlewares();
        this.UpDB();
        this.routes();
        // this.run(this.__PORT);
        this.runSSL(443); // Cambia el puerto si es necesario
        this.runSSL(this.__PORT); // Cambia el puerto si es necesario
    }

    middlewares() {
        // Configuraciones de middleware
        // Peticiones de origen cruzado
        this.__app.use(express.static('public'))

        this.__app.use(cors());
        this.__app.use(express.json())
        this.__app.use(express.raw({ type: 'image/*', limit: '100mb' }))
        this.__app.use(express.urlencoded({ extended: true }))
        // File Upload
        this.__app.use(fileUpload({
            useTempFiles: false,
            tempFileDir: "/temp/"
        }))
    }

    async UpDB() {
        // Conexión a la base de datos
        try {
            // Aquí debes conectar a la base de datos, por ejemplo:
            await DB.authenticate();
            console.log('DB Online');
        } catch (err) {
            console.log('No se pudo conectar a la base de datos');
            console.log(err);
        }
    }

    routes() {
        // Conexión de rutas básicas
        // const storage = multer.memoryStorage();
        // const upload = multer({ storage });

        // Utiliza upload.any() para manejar cualquier campo de archivo en la solicitud
        // Antes de las rutas
        this.__app.use((req = request, res= response, next: any) => {
            if (!req.secure) {
                return res.redirect('https://' + req.get('host') + req.url);
            }
            next();
        });

        this.__app.use('/api', require('../routes/api'));
    }

    // run(port: number) {
    //     // Arranca el servidor HTTP
    //     this.__app.listen(port, () => {
    //         console.log('Server run on port ' + port);
    //     });
    // }

    runSSL(port: number) {
        // Obtén la ruta completa del directorio del archivo actual
        const currentDir = __dirname;
        console.log(currentDir)

        // Configuración SSL
        const privateKeyPath = path.join(currentDir, '../ssl', 'almacadaques.key');
        const certificatePath = path.join(currentDir, '../ssl', 'almacadaques.cer');

        // Lee el contenido de los archivos
        const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
        const certificate = fs.readFileSync(certificatePath, 'utf8');
        const credentials = { key: privateKey, cert: certificate };

        // Crea un servidor HTTPS
        const httpsServer = https.createServer(credentials, this.__app);

        // Arranca el servidor HTTPS
        httpsServer.listen(port, () => {
            console.log('Server run on port ' + port + ' (SSL)');
        });
    }

}

module.exports = Server;
