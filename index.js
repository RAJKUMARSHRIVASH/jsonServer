const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
// const path = require('path')
// const router = jsonServer.router(path.join(__dirname, 'db.json'))
 
server.use(middlewares)
server.use("",router)

server.listen(process.env.port || 4000, () => {
  console.log('JSON Server is running')
})