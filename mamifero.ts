import fastify, { FastifyRequest, FastifyReply } from "fastify";
import cors from '@fastify/cors'
import { PrismaClient } from "@prisma/client";

const app = fastify()
const prisma = new PrismaClient()

interface Elefante {
    nome: string;
    sexo: string;
    idade: number;
    saudavel: boolean
  }
  
app.post('/reg', async (request: FastifyRequest <{ Body: Elefante }>, reply: FastifyReply) => {
  
    const { nome, sexo, idade, saudavel } = request.body 

    const elefante = await prisma.elefante.create({
      data: {
        nome,
        sexo,
        idade,
        saudavel
      },
    });
  
    return { message: 'Elefante cadastrado com sucesso!'};
  });

  app.delete('/del', async (request: FastifyRequest<{ Querystring: { nome: string } }>, reply: FastifyReply) => {
    const { nome } = request.query;
  
    try {
      await prisma.elefante.deleteMany({
        where: {
          nome: nome
        }
      });

      return { message: 'Elefante excluído com sucesso!' };
    } catch (error) {
      reply.status(500).send({ error: 'Ocorreu um erro ao excluir os elefantes.' });
    }
  });

  app.register(cors, {
    origin: "*",
  });

  app.listen({port:3333})