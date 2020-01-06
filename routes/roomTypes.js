import { getAllRoomTypes, postNewRoomType } from "../controllers/roomTypes"

export default (app) => {
    app.get('/room-types', getAllRoomTypes)
    app.post('/room-types', postNewRoomType)
}