import express from "express";
import { toolsRoutes } from "./routes/tools.routes"

const app = express()
app.use(express.json())

app.use(toolsRoutes)
app.listen(3000, () => {
    console.log("server is runnig")
})