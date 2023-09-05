import { Router } from "express";
const rutas = Router();
import { ApiGet } from "../controllers/infoAPI.js";


rutas.get('/api', ApiGet)


export default rutas;