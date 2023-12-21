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
    }
  
    // Renderizar mensagens quando a página carregar
    renderMessages();
  });
  