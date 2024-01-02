// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Chama a função para verificar o estado de login e definir o fundo azul se necessário
    checkLoginStatus();
  
    // Adiciona uma função para carregar informações sobre todos os usuários
    loadAllUsers();
  });
  
  // Função para carregar informações sobre todos os usuários
  function loadAllUsers() {
    fetch('/allusers')
      .then(response => response.json())
      .then(users => {
        const userListContainer = document.querySelector('.user-list');
  
        // Limpa o conteúdo existente
        userListContainer.innerHTML = '';
  
        // Adiciona os detalhes dos usuários ao contêiner
        users.forEach(user => {
          const userItem = document.createElement('div');
          userItem.classList.add('user-item');
  
          userItem.innerHTML = `<p>Usuário: ${user.username}, ID: ${user.id}, Logado: ${user.loggedIn ? 'Sim' : 'Não'}</p>`;
  
          userListContainer.appendChild(userItem);
        });
      })
      .catch(error => console.error('Erro:', error));
  }
  
  // ... restante do seu código
  