import * as express from "express"
import { Request, Response } from "express"
import * as cors from "cors"
import * as dotenv from 'dotenv'
dotenv.config()

import routes from './routes'

const PORT = process.env.PORT || 3000

const app = express() // cria o servidor
app.use(express.json()) // suporta passar parâmetros pelo body como JSON
app.use(cors()) // suporta requisições de qualquer domínio

// coloca o servidor na porta especifida
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))

app.use(routes)