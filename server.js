/* 
// Server with node.js
import { createServer } from 'node:http'

const server = createServer((request, response) => {
  response.write('Hello World!, ')
  response.write(' Another Test In Real Time')

  return response.end()
})
server.listen(3333); 
*/



/* 
// simplify crud getting routes created
import { fastity } from 'fastify'

const server = fastify();

server.get('/', () => {
  return 'Hello root path'
})

server.get('/intro', () => {
  return 'Hello Intro'
})

server.get('/node', () => {
  return 'Hello Node.js'
})

server.listen({
  port: 3333,
}) 
*/



import { fastify } from 'fastify'

const server = fastify()


// Base de criação de rotas com fastity
server.post('/videos', () => {
  return 'Hello World Post Create'
}) // Cria videos no banco de dados

server.get('/videos', () => {
  return 'Hello Router hello Get'
}) // Busca-retorna-obtem os videos criados no banco de dados

server.put('/videos/:id', () => {
  return 'Hello Node.js Put' 
}) // Atualizar um video com ID no banco de dados

server.delete('/videos/:id', () => {
  return 'Hello Node.js Delete'
}) // Deletar um video com ID no banco de dados


server.listen({
  port: 3333,
})

