import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'

let app = express()

mongoose.connect('mongodb://localhost:27017/hotelReservationSystem', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('connected')
}).catch(err => {
    console.log(err)
})

app.use(express.json())

routes(app)

app.listen(3000, () => {
    console.log('listening to port 3000')
})