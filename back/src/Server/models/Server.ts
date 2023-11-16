// import express from 'express'
// import cors from 'cors'
// import DB from '../db/conexion'
// import swaggerUi from 'swagger-ui-express'
// import swaggerJsdoc from 'swagger-jsdoc'

// const fileUpload = require('express-fileupload')

// class Server {
//   __app: any
//   __PORT: number

//   constructor(port: number) {
//     this.__PORT = port
//     this.__app = express()
//     this.middlewares()
//     this.UpDB()
//     this.setUpSwagger()
//     this.setUpRoutes()
//     this.routes()
//     this.run(this.__PORT)
//   }

//   setUpSwagger() {
//     const options = {
//       swaggerDefinition: {
//         info: {
//           title: 'API de Almacadaquest',
//           version: '1.0.0',
//           description: 'Documentación de la API de Almacadaquest',
//         },
//       },
//       apis: ['./api/routes/*'], // Ruta donde están definidos tus endpoints (ajusta según tu estructura)
//     }

//     const specs = swaggerJsdoc(options)

//     this.__app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
//   }

//   middlewares() {
//     // Configuraciones de middleware
//     // Peticiones de origen cruzado
//     this.__app.use(express.static('public'))

//     this.__app.use(cors())
//     this.__app.use(express.json())
//     this.__app.use(express.raw({ type: 'image/*', limit: '100mb' }))
//     this.__app.use(express.urlencoded({ extended: true }))
//     // File Upload
//     this.__app.use(
//       fileUpload({
//         useTempFiles: false,
//         tempFileDir: '/temp/',
//       })
//     )
//   }

//   async UpDB() {
//     // Conexión a la base de datos
//     try {
//       // Aquí debes conectar a la base de datos, por ejemplo:
//       await DB.authenticate()
//       console.log('DB Online')
//     } catch (err) {
//       console.log('No se pudo conectar a la base de datos')
//       console.log(err)
//     }
//   }

//   setUpRoutes() {
//     // Definir un endpoint de ejemplo
//     /**
//      * @swagger
//      * /api/example:
//      *   get:
//      *     summary: Ejemplo de endpoint para Swagger
//      *     description: Retorna un mensaje como ejemplo de endpoint para Swagger.
//      *     responses:
//      *       '200':
//      *         description: Mensaje de ejemplo.
//      */
//     this.__app.get('/example', () => {
//       return 'Hola'
//     })
//   }

//   routes() {
//     // Conexión de rutas básicas
//     // const storage = multer.memoryStorage();
//     // const upload = multer({ storage });

//     // Utiliza upload.any() para manejar cualquier campo de archivo en la solicitud
//     this.__app.use('/api', require('../routes/api'))
//   }

//   run(__PORT: number) {
//     // Arranca el servidor
//     this.__app.listen(__PORT, () => {
//       console.log('Server run on port ' + __PORT)
//     })
//   }
// }

// module.exports = Server

// MIGRE TODO A FUNCIONAL
import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { Response } from 'express' // Importa Request y Response de Express
import DB from '../db/conexion'
// import * as swaggerDocument from './swagger.json'; // Aquí se cargará tu archivo Swagger

// const fileUpload = require('express-fileupload');
// const DB = require('../db/conexion')

export function setUpServer(port?: string) {
  const app = express()

  // Configuraciones de middleware
  app.use(express.static('public'))
  app.use(cors())
  app.use(express.json())
  app.use(express.raw({ type: 'image/*', limit: '100mb' }))
  app.use(express.urlencoded({ extended: true }))

  // Configuración de Swagger
  const options = {
    swaggerDefinition: {
      info: {
        title: 'API de Almacadaquest',
        version: '1.0.0',
        description: 'Documentación de la API de Almacadaquest',
      },
    },
    apis: ['./**/*.ts']// Ruta donde están definidos tus endpoints (ajusta según tu estructura)
  }

  const specs = swaggerJsdoc(options)
  console.log(specs)
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

  // Conexión a la base de datos
  async function UpDB() {
    try {
      await DB.authenticate()
      console.log('DB Online')
    } catch (err) {
      console.log('No se pudo conectar a la base de datos')
      console.log(err)
    }
  }
  UpDB() // Llamada a la función para conectar a la base de datos

  // Definir un endpoint de ejemplo
  /**
   * @swagger
   * /api/example:
   *   get:
   *     summary: Ejemplo de endpoint para Swagger
   *     description: Retorna un mensaje como ejemplo de endpoint para Swagger.
   *     responses:
   *       '200':
   *         description: Mensaje de ejemplo.
   */
  app.get('/example', (res: Response) => {
    res.status(200).send('Hola')
  })

  // Conexión de rutas básicas
  app.use('/api', require('../routes/api'))

  // Arranca el servidor
  app.listen(port, () => {
    console.log('Server run on port ' + port)
  })
}
