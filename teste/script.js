document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');
    const chatHeader = document.getElementById('chat-header');
    const messagesContainer = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
  
    let selectedUser = null;
  
    // Simulando usuários
    const users = ['user1', 'user2', 'user3'];
  
    // Adicionando eventos de clique para usuários
    users.forEach(user => {
      const userElement = document.querySelector(`[data-userid="${user}"]`);
      userElement.addEventListener('click', () => {
        selectedUser = user;
        chatHeader.textContent = `Conversando com ${user}`;
        messagesContainer.innerHTML = ''; // Limpa as mensagens ao mudar de usuário
      });
    });
  
    // Função para enviar mensagem
    window.sendMessage = function () {
      const messageText = messageInput.value.trim();
      if (messageText !== '' && selectedUser) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = `${selectedUser}: ${messageText}`;
        messagesContainer.appendChild(messageElement);
  
        // Limpar o campo de entrada
        messageInput.value = '';
      }
    };
  });

  document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');
    const chatHeader = document.getElementById('chat-header');
    const messagesContainer = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
  
    let selectedUser = null;
  
    // Simulando usuários
    const users = ['user1', 'user2', 'user3'];
  
    // Adicionando eventos de clique para usuários
    users.forEach(user => {
      const userElement = document.querySelector(`[data-userid="${user}"]`);
      userElement.addEventListener('click', () => {
        selectedUser = user;
        chatHeader.textContent = `Conversando com ${user}`;
        renderMessages();
      });
    });
  
    // Função para enviar mensagem
    window.sendMessage = function () {
      const messageText = messageInput.value.trim();
      if (messageText !== '' && selectedUser) {
        const message = { user: selectedUser, text: messageText };
  
        // Armazenar a mensagem no localStorage
        const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        storedMessages.push(message);
        localStorage.setItem('chatMessages', JSON.stringify(storedMessages));
  
        // Limpar o campo de entrada
        messageInput.value = '';
  
        // Atualizar a exibição das mensagens
        renderMessages();
      }
    };
  
    // Função para renderizar as mensagens
    function renderMessages() {
      messagesContainer.innerHTML = '';
  
      // Obter mensagens do localStorage
      const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
  
      // Filtrar mensagens apenas para o usuário selecionado
      const userMessages = storedMessages.filter(message => message.user === selectedUser);
  
      // Adicionar mensagens ao contêiner
      userMessages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = `${message.user}: ${message.text}`;
        messagesContainer.appendChild(messageElement);
      });



        document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const chatContainer = document.querySelector('.chat-container');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const users = [
    { username: 'tiago', password: 'senha123' },
    { username: 'fabiana', password: 'senha456' },
    { username: 'renata', password: 'senha789' }
    // Adiciona mais usuários com nome de usuário e senha
  ];

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const enteredUsername = usernameInput.value.toLowerCase();
    const enteredPassword = passwordInput.value;

    const foundUser = users.find(user => user.username === enteredUsername && user.password === enteredPassword);

    if (foundUser) {
      // Login bem-sucedido, mostra a área do chat e oculta o formulário de login
      chatContainer.style.display = 'block';
      document.querySelector('.login-container').style.display = 'none';
      // Aqui podes adicionar lógica adicional para exibir o chat para o usuário logado
    } else {
      alert('Nome de usuário ou senha incorretos. Tente novamente.');
    }
  });
});

    }
  
    // Renderizar mensagens quando a página carregar
    renderMessages();
  });
  
