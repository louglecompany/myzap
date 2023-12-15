const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Coloque o middleware static no topo
app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('Um usuário conectado');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

// Remova a rota de raiz do local atual e coloque no final
// app.get('/', (req, res) => {
//   res.send('Bem-vindo à página inicial!');
// });

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});

// Adicione a rota de raiz aqui
app.get('/', (req, res) => {
  res.send('Bem-vindo à página inicial!');
});
