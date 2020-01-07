import { getAllRoomTypes, postNewRoomType, getRoomTypeById, updateRoomTypeById, deleteRoomTypeById } from "../controllers/roomTypes"

export default (app) => {
    app.get('/room-types', getAllRoomTypes)
    app.get('/room-types/:id', getRoomTypeById)
    app.post('/room-types', postNewRoomType)
    app.put('/room-types/:id', updateRoomTypeById)
    app.delete('/room-types/:id', deleteRoomTypeById)
}