import express from 'express';
import cors from 'cors';
import multer from 'multer';
import DB from '../db/conexion';


class Server {
    __app: any;
    __PORT: number;

    constructor(port: number) {
        this.__PORT = port;
        this.__app = express();
        this.middlewares();
        this.UpDB()
        this.routes();
        this.run(this.__PORT);
    }

    middlewares() {
        // Aquí van las configuraciones de middleware
        // Peticiones de origen cruzado
        this.__app.use(cors());

        // Lectura y parseo del body
        this.__app.use(express.json());
        this.__app.use(express.urlencoded({ extended: true }));
    }

    async UpDB() {
        // Aquí se conecta la base de datos
        try {
            DB
            // DB.authenticate()
            // console.log('DB Online')

        } catch (err) {
            console.log('Nada de subir DB')
            console.log(err)
        }

    }

    routes() {
        // Aquí se conectan las rutas básicas
        const storage = multer.memoryStorage();
        const upload = multer({ storage });

        this.__app.use('/api', upload.single('fieldName'), require('../routes/api'));
    }

    run(__PORT: number) {
        // Aquí se arranca el servidor
        this.__app.listen(__PORT, () => {
            console.log('Server run on port ' + __PORT);
        });
    }
}

module.exports = Server;
