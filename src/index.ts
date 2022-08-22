import * as express from "express"
import { Request, Response } from "express"
import * as cors from "cors"
import * as dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3000

const app = express() // cria o servidor
app.use(express.json()) // suporta JSON
app.use(cors()) // suporta requisições de qualquer domínio

// start express server
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))

app.get("/", (req: Request, res: Response) => {
    res.send("Rodando")
})