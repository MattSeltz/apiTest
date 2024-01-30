import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import "dotenv/config"

mongoose.connect(process.env.MONGODB_KEY)
	.then(console.log("Conectado a Mongo DB"))
	.catch(e => console.error(e))

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
	res.json({message:"Servidor"})
})

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))