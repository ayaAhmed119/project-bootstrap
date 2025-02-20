const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!loginForm.checkValidity()) {
    loginForm.classList.add('was-validated');
    return;
  }

  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.email === email && user.password === password) {
    window.location.href = 'index.html';
  } else {
    document.getElementById('login-email').classList.add('is-invalid');
    document.getElementById('login-password').classList.add('is-invalid');
  }
});