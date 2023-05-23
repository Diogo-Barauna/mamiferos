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
  
// Função de cadastro
app.post('/reg', async (request: FastifyRequest <{ Body: Elefante }>, reply: FastifyReply) => {

  const { nome, sexo, idade, saudavel } = request.body 

  try {
    const elefante = await prisma.elefante.create({
      data: {
        nome,
        sexo,
        idade,
        saudavel
      },
    });

  return { message: 'Elefante cadastrado com sucesso!'};

  } catch(error) {
    reply.status(500).send({ error: 'Ocorreu um erro ao cadastrar o elefante.' });
  }  
});

// Função de delete
app.delete('/del', async (request: FastifyRequest<{ Querystring: { nome: string } }>, reply: FastifyReply) => {

  const { nome } = request.query;
  
  try {
    await prisma.elefante.deleteMany({
      where: {
        nome
      }
    });

  return { message: 'Elefante excluído com sucesso!' };

  } catch (error) {
    reply.status(500).send({ error: 'Ocorreu um erro ao excluir o elefante.' });
  }
});
// Função de atualização
app.put('/upd/:nome', async (request: FastifyRequest<{ Params: { nome: string }, Body: Elefante }>, reply: FastifyReply) => {

  const { nome } = request.params;
  const { sexo, idade, saudavel } = request.body;
  
  try {
    const elefante = await prisma.elefante.update({
      where: {
        nome
      },
      data: {
        sexo,
        idade,
        saudavel
      }
    });
  
  return { message: 'Elefante atualizado com sucesso!'};

  } catch (error) {
    reply.status(500).send({ error: 'Ocorreu um erro ao atualizar o elefante.' });
  }
});

// Função de busca
app.get('/search', async (request: FastifyRequest<{ Querystring: { nome: string } }>, reply: FastifyReply) => {
  const { nome } = request.query;
  
  try {
    const elefantes = await prisma.elefante.findMany({
      where: {
        nome: {
           contains: nome
        }
      }
    });
    return { elefantes };
  } catch (error) {
    reply.status(500).send({ error: 'Ocorreu um erro ao pesquisar elefantes.' });
  }
});
  
app.register(cors, {
  origin: "*",
});

app.listen({port:3333})