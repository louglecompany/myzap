// Seu JavaScript (script.js)
document.getElementById('submitButton').addEventListener('click', function() {
  validateLogin();
});

function validateLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('usersenha').value;

  // Fazer uma solicitação POST para o servidor
  fetch('/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Redirecionar para a página desejada e usar o userId conforme necessário
      window.location.href = data.redirect + '?userId=' + data.userId;
    } else {
      alert(data.message);
    }
  })
  .catch(error => console.error('Erro:', error));
}

// Adicione esta função para verificar o estado de login e definir o fundo azul se necessário
function checkLoginStatus() {
  fetch('/users')
    .then(response => response.json())
    .then(users => {
      const userId = new URLSearchParams(window.location.search).get('userId');
      const loggedInUser = users.find(user => user.id === userId && user.loggedIn);

      if (loggedInUser) {
        document.body.style.backgroundColor = 'blue';
      }
    })
    .catch(error => console.error('Erro:', error));
}

// Chame a função ao carregar a página
checkLoginStatus();
