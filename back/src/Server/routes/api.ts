import {Router} from 'express'


const app = Router()

app.use('/mail' , require('../api/routes/mail'))
app.use('/auth' , require('../api/routes/auth'))
app.use('/testimony', require('../api/routes/testimony'))



module.exports = app