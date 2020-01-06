import RoomTypes from "../models/roomTypes"

export const getAllRoomTypes = (req, res) => {
    RoomTypes.find({}, (err, roomTypes) => {
        if (err) res.status(500).json(errMessageGet)
        res.status(200).json({ roomTypes })
    })
}

export const postNewRoomType = (req, res) => {
    new RoomTypes(req.body).save((err, roomType) => {
        if (err) res.status(500).json(errMessageGet)
        res.status(201).json({ roomType })
    })
}