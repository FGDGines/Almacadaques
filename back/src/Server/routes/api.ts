import {Router} from 'express'


const app = Router()

app.use('/mail' , require('../api/routes/mail'))
app.use('/auth' , require('../api/routes/auth'))
app.use('/testimony', require('../api/routes/testimony')) 
app.use('/collaborator', require('../api/routes/collaborator')) 
app.use('/carousel', require('../api/routes/carousel')) 
app.use('/espacio', require('../api/routes/espacio')) 



module.exports = app