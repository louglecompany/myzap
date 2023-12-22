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
document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const chatContainer = document.getElementById('chat-container');
    const userList = document.getElementById('user-list');
    const chatHeader = document.getElementById('chat-header');
    const messagesContainer = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
    const usernameInput = document.getElementById('username-input');
    const passwordInput = document.getElementById('password-input');

    let selectedUser = null;
    let currentUser = null;

    // Simulando usuários e senhas
    const users = [
        { username: 'Tiago', password: 'tiago123' },
        { username: 'Jessica', password: 'jessica123' },
        { username: 'Ana', password: 'ana123' }
    ];

    // Adicionando eventos de clique para usuários
    users.forEach(user => {
        const userElement = document.querySelector(`[data-userid="${user.username}"]`);
        userElement.addEventListener('click', () => {
            selectedUser = user.username;
            chatHeader.textContent = `Conversando com ${user.username}`;
            renderMessages();
        });

    // Função para efetuar login
    window.login = function () {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Verificando se o usuário e senha correspondem
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            currentUser = username;
            loginContainer.style.display = 'none';
            chatContainer.style.display = 'block';
        } else {
            alert('Usuário ou senha incorretos. Tente novamente.');
        }
    };

    // Restante do código permanece inalterado
    // ...
});

  
// Função para enviar mensagem
window.sendMessage = function () {
    const messageText = messageInput.value.trim();
    if (messageText !== '' && selectedUser) {
        const message = { user: currentUser, text: messageText };

        // Armazenar a mensagem no localStorage
        const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        storedMessages.push(message);
        localStorage.setItem('chatMessages', JSON.stringify(storedMessages));

        // Limpar o campo de entrada
        messageInput.value = '';

        // Atualizar a exibição das mensagens apenas se o usuário selecionado for o destinatário
        if (selectedUser === currentUser) {
            renderMessages();
        }
    }
};

  
// Função para enviar mensagem
window.sendMessage = function () {
    const messageText = messageInput.value.trim();
    if (messageText !== '' && selectedUser) {
        const message = { sender: currentUser, receiver: selectedUser, text: messageText };

        // Armazenar a mensagem no localStorage
        const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        storedMessages.push(message);
        localStorage.setItem('chatMessages', JSON.stringify(storedMessages));

        // Limpar o campo de entrada
        messageInput.value = '';

        // Atualizar a exibição das mensagens apenas se o usuário selecionado for o destinatário
        if (selectedUser === currentUser) {
            renderMessages();
        }
    }
};

// Função para renderizar as mensagens
function renderMessages() {
    messagesContainer.innerHTML = '';

    // Obter mensagens do localStorage
    const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];

    // Filtrar mensagens para exibir apenas as mensagens entre o usuário logado e o usuário selecionado
    const userMessages = storedMessages.filter(message =>
        (message.sender === currentUser && message.receiver === selectedUser) ||
        (message.sender === selectedUser && message.receiver === currentUser)
    );

    // Adicionar mensagens ao contêiner
    userMessages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = `${message.sender}: ${message.text}`;
        messagesContainer.appendChild(messageElement);
    });
}

// Restante do código permanece inalterado
// ...

// Renderizar mensagens quando a página carregar
renderMessages();
});
