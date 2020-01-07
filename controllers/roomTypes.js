import { messageSave, messageUpdate, messageNoContent, messageDel } from "../config/constants"
import RoomTypes from "../models/roomTypes"
import { restart } from "nodemon"

export const getAllRoomTypes = (req, res) => {
    RoomTypes.find({}, (err, roomTypes) => {
        if (err) res.status(500).json(errMessageGet)
        res.status(200).json({ roomTypes })
    })
}

export const getRoomTypeById = (req, res) => {
    RoomTypes.findById(req.params.id, (err, roomType) => {
        if (err) res.status(500).json(errMessageGet)
        res.status(200).json({ roomType })
    })
}

// export const getRoomTypeByIdOrTitle = (req, res) => {
//     RoomTypes.findOne({
//         "$or": [
//             { id: req.params.param },
//             { title: req.params.param }
//         ]
//     }, (err, roomType) => {
//         if (err) res.status(500).json(errMessageGet)
//         res.status(200).json({ roomType })
//     })
// }

export const postNewRoomType = (req, res) => {
    new RoomTypes(req.body).save((err, roomType) => {
        if (err) res.status(500).json(errMessageGet)
        res.status(201).json( messageSave )
    })
}

export const updateRoomTypeById = (req, res) => {
    RoomTypes.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) res.status(500).json(errMessageGet)
        res.status(200).json(messageUpdate)
    })
}

export const deleteRoomTypeById = (req, res) => {
    RoomTypes.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) res.status(500).json(errMessageGet)
        else if(data === null) res.status(200).json(messageNoContent)
        else res.status(200).json(messageDel)
    })
}