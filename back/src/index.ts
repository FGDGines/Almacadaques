import { setUpServer } from './Server/models/Server'
require('dotenv').config()

setUpServer(process.env.PORT)
