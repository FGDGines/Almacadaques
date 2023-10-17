import express from 'express';
import cors from 'cors';
import multer from 'multer';
// import DB from '../db/conexion';

class Server {
    __app: any;
    __PORT: number;

    constructor(port: number) {
        this.__PORT = port;
        this.__app = express();
        this.middlewares();
        this.UpDB();
        this.routes();
        this.run(this.__PORT);
    }

    middlewares() {
        // Configuraciones de middleware
        // Peticiones de origen cruzado
        this.__app.use(cors());
    }

    async UpDB() {
        // Conexión a la base de datos
        try {
            // Aquí debes conectar a la base de datos, por ejemplo:
            // await DB.authenticate();
            // console.log('DB Online');
        } catch (err) {
            console.log('No se pudo conectar a la base de datos');
            console.log(err);
        }
    }

    routes() {
        // Conexión de rutas básicas
        const storage = multer.memoryStorage();
        const upload = multer({ storage });

        // Utiliza upload.any() para manejar cualquier campo de archivo en la solicitud
        this.__app.use('/api', upload.any(), require('../routes/api'));
    }

    run(__PORT: number) {
        // Arranca el servidor
        this.__app.listen(__PORT, () => {
            console.log('Server run on port ' + __PORT);
        });
    }
}

module.exports =  Server;
