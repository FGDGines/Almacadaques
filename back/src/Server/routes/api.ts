import {Router} from 'express'

const app = Router()

app.use('/mail' , require('../api/routes/mail'))



module.exports = app