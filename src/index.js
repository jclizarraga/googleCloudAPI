import express from "express";
const app = express();
const port = 3000
import rutas from "./routes/rutas.routes.js";

app.use(rutas)

app.listen(port, () => {
    console.log(`Server online on port ${port}`)
  })