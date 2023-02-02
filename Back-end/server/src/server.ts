// back-end API RESTful

import Fastify from 'fastify'
import cors from '@fastify/cors'
import { prisma } from "./lib/prisma"
import { appRoutes } from './routes'


const app= Fastify()


app.register(cors)
app.register(appRoutes)
/*
 *Método HTTP: get(buscar infos), post(criar algo), put(atualizar algum
    recurso por completo), patch(atualizar algo específico de um recurso), delete(
    deletar um recurso)
*/



app.listen({ //fazer com que app "ouça" a porta 33333
    port:3000,
}).then(()=>{
    console.log("Running code...") //npm run dev
})