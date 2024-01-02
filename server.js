const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

// Middleware para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir conteúdo estático na pasta 'public'
app.use(express.static(path.join(__dirname)));


// Array de usuários
const users = [
  { id: uuidv4(), username: 'tiago', password: '1234', loggedIn: false },
  { id: uuidv4(), username: 'lucas', password: '1234', loggedIn: false },
  { id: uuidv4(), username: 'maria', password: '1234', loggedIn: false },
  { id: uuidv4(), username: 'joao', password: '1234', loggedIn: false },
  { id: uuidv4(), username: 'pedro', password: '1234', loggedIn: false },
  { id: uuidv4(), username: 'leticia', password: '1234', loggedIn: false }
];

// Rota para lidar com a autenticação
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Verificar se as credenciais correspondem a algum usuário
  const authenticatedUser = users.find(user => user.username === username && user.password === password);

  if (authenticatedUser) {
    authenticatedUser.loggedIn = true;
    res.json({ success: true, redirect: '/zap/index.html', userId: authenticatedUser.id });
  } else {
    res.status(401).json({ success: false, message: 'Usuário ou senha incorretos. Tente novamente.' });
  }
});

// Rota para obter informações sobre usuários
app.get('/users', (req, res) => {
  // Retorna informações sobre todos os usuários
  res.json(users.map(user => ({ id: user.id, username: user.username, loggedIn: user.loggedIn })));
});

// Rota para obter informações sobre usuários
app.get('/allusers', (req, res) => {
  // Retorna informações sobre todos os usuários
  res.json(users);
});


// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

