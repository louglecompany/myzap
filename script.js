// server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));

// Rota para a página de login
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('Um usuário conectado');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});

// Dentro do script no seu index.html
$('#loginForm').submit(function(event) {
    event.preventDefault();
    const username = $('#username').val();
    const password = $('#password').val();
  
    // Verifique as credenciais do usuário (simplificado para fins educacionais)
    if (username === 'cartorio' && password === 'Superlegal') {
      // Se as credenciais forem válidas, redirecione para a sala de chat
      window.location.href = './zap/public/imdex.html';
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  });
  
