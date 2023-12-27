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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const conexion_1 = __importDefault(require("../db/conexion"));
const fileUpload = require("express-fileupload");
class Server {
    constructor(port) {
        this.__PORT = port;
        this.__app = (0, express_1.default)();
        this.middlewares();
        this.UpDB();
        this.routes();
        // this.run(this.__PORT);
        this.runSSL(443); // Cambia el puerto si es necesario
    }
    middlewares() {
        // Configuraciones de middleware
        // Peticiones de origen cruzado
        this.__app.use(express_1.default.static('public'));
        this.__app.use((0, cors_1.default)());
        this.__app.use(express_1.default.json());
        this.__app.use(express_1.default.raw({ type: 'image/*', limit: '100mb' }));
        this.__app.use(express_1.default.urlencoded({ extended: true }));
        // File Upload
        this.__app.use(fileUpload({
            useTempFiles: false,
            tempFileDir: "/temp/"
        }));
    }
    UpDB() {
        return __awaiter(this, void 0, void 0, function* () {
            // Conexión a la base de datos
            try {
                // Aquí debes conectar a la base de datos, por ejemplo:
                yield conexion_1.default.authenticate();
                console.log('DB Online');
            }
            catch (err) {
                console.log('No se pudo conectar a la base de datos');
                console.log(err);
            }
        });
    }
    routes() {
        // Conexión de rutas básicas
        // const storage = multer.memoryStorage();
        // const upload = multer({ storage });
        // Utiliza upload.any() para manejar cualquier campo de archivo en la solicitud
        // Antes de las rutas
        // this.__app.use((req = request, res= response, next: any) => {
        //     if (!req.secure) {
        //         return res.redirect('https://' + req.get('host') + req.url);
        //     }
        //     next();
        // });
        this.__app.use('/api', require('../routes/api'));
    }
    run(port) {
        // Arranca el servidor HTTP
        this.__app.listen(port, () => {
            console.log('Server run on port ' + port);
        });
    }
    runSSL(port) {
        // Obtén la ruta completa del directorio del archivo actual
        const currentDir = __dirname;
        console.log(currentDir);
        // Configuración SSL
        const privateKeyPath = path_1.default.join(currentDir, '../ssl', 'almacadaques.key');
        const certificatePath = path_1.default.join(currentDir, '../ssl', 'almacadaques.cer');
        // Lee el contenido de los archivos
        const privateKey = fs_1.default.readFileSync(privateKeyPath, 'utf8');
        const certificate = fs_1.default.readFileSync(certificatePath, 'utf8');
        const credentials = { key: privateKey, cert: certificate };
        // Crea un servidor HTTPS
        const httpsServer = https_1.default.createServer(credentials, this.__app);
        // Arranca el servidor HTTPS
        httpsServer.listen(port, () => {
            console.log('Server run on port ' + port + ' (SSL)');
        });
    }
}
module.exports = Server;
