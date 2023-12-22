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

        { username: 'tiago', password: 'tiago123@' },
        { username: 'jessica', password: 'jessica123@' },
        { username: 'ana', password: 'ana123@' },
        { username: 'adriane', password: 'adriane123@' },
        { username: 'elizabeti', password: 'elizabeti123@' },
        { username: 'carolina', password: 'carolina123@' },
        { username: 'ryllary', password: 'ryllary123@' },
        { username: 'miguel', password: 'miguel123@' },

        { username: 'izabeli', password: 'Izabeli123@' },
        { username: 'camilac', password: 'camilac123@' },

        { username: 'fabiana', password: 'fabiana123@' },
        { username: 'horrana', password: 'horrana123@' },
        { username: 'renata', password: 'reanata123@' },
        { username: 'angelo', password: 'angelo123@' },

        { username: 'leticia', password: 'leticia123@' },
        { username: 'larissa', password: 'larissa123@' },
        { username: 'janaina', password: 'janaina123@' },
        { username: 'anam', password: 'anam123@' },

        { username: 'katia', password: 'katia123@' },
        { username: 'camila', password: 'camila123@' },
        { username: 'andreia', password: 'andreia123@' },
        { username: 'andressa', password: 'andressa123@' },
        { username: 'venicius', password: 'venicius123@' },
        { username: 'thais', password: 'thais123@' },
        { username: 'grazieli', password: 'grazieli123@' },
        { username: 'fernanda', password: 'fernanda123@' },

        { username: 'renan', password: 'Renan123@' },
        { username: 'franciele', password: 'franciele123@' },

        { username: 'michele', password: 'michele123@' },
        { username: 'sirlene', password: 'sirlene123@' },
        { username: 'anaelen', password: 'anaelen123@' },
        { username: 'kethelin', password: 'kethelin123@' },
        { username: 'marilize', password: 'marilize123@' },
        { username: 'fantasma', password: 'fantasma123@' },
        { username: 'fantasmab', password: 'fantasmab123@' }
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

// Adicione essas funções no seu script.js

document.getElementById('emoji-button').addEventListener('click', () => {
    // Exiba o modal de emojis quando o botão for clicado
    document.getElementById('emoji-modal').style.display = 'block';
  });
  
  function closeModal() {
    // Feche o modal de emojis quando o botão "X" for clicado
    document.getElementById('emoji-modal').style.display = 'none';
  }
  
  function insertEmoji(emoji) {
    // Insira o emoji selecionado no campo de entrada
    const messageInput = document.getElementById('message-input');
    messageInput.value += emoji;
  
    // Feche o modal de emojis
    closeModal();
  }
