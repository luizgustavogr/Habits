// back-end API RESTful

import Fastify from "fastify"
import cors from '@fastify/cors'
import {PrismaClient} from '@prisma/client'

const app= Fastify()
const prisma = new PrismaClient()

app.register(cors)

/*
 *Método HTTP: get(buscar infos), post(criar algo), put(atualizar algum
    recurso por completo), patch(atualizar algo específico de um recurso), delete(
    deletar um recurso)
*/

app.get('/', async ()=>{
	const habits= await prisma.habit.findMany()

  return habits
})

app.listen({ //fazer com que app "ouça" a porta 33333
    port:3333,
}).then(()=>{
    console.log("Running code...") //npm run dev
})