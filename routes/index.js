import { getHomePage } from "../controllers"
import roomTypes from "./roomTypes"

export default (app) => {
    app.get('/', getHomePage)
    
    roomTypes(app)
}