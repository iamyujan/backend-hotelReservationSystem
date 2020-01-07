import mongoose, { Schema } from "mongoose"

let { ObjectId } = Schema.Types

let roomTypes = new Schema({
    title: {
        type: String,
        required: true
    },
    price: new Schema({
        currency_code: {
            type: String,
            required: true
        },
        amount: {
            type: String,
            required: true
        }
    }),
    max_guest: {
        type: Number,
        required: true
    }
})

export default mongoose.model('Room Type', roomTypes)