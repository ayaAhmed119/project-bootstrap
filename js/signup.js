const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  if (!signupForm.checkValidity()) {
    signupForm.classList.add('was-validated');
    return;
  }

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  localStorage.setItem('user', JSON.stringify({ username, email, password }));
  window.location.href = 'login.html';
});