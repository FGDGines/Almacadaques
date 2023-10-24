import {Router} from 'express'


const app = Router()

app.use('/mail' , require('../api/routes/mail'))
app.use('/auth' , require('../api/routes/auth'))



module.exports = app