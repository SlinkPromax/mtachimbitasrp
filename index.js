// Verificar si hay datos de usuarios en el almacenamiento local
var users = JSON.parse(localStorage.getItem('users')) || [];

function redirectToIndex2() {
    window.location.href = 'index2.html'; // Redirige al usuario a index2.html
}

function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}   

function register() {
    var registerUsername = document.getElementById('registerUsername').value;
    var registerEmail = document.getElementById('registerEmail').value;
    var registerPassword = document.getElementById('registerPassword').value;

    // Verificar si ya hay una cuenta registrada con el mismo nombre de usuario
    var existingUser = users.find(user => user.username === registerUsername);
    if (existingUser) {
        alert('Ya hay una cuenta registrada con este nombre de usuario.');
        return;
    }

    // Si no hay una cuenta registrada con el mismo nombre de usuario, procede con el registro
    var newUser = {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Redirigir al usuario a index2.html después del registro exitoso
    redirectToIndex2();
}

function login() {
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;

    // Verificar las credenciales de inicio de sesión
    var user = users.find(user => user.username === loginUsername && user.password === loginPassword);
    if (user) {
        // Inicio de sesión exitoso, puedes guardar la cuenta por IP aquí si lo deseas
        redirectToIndex2();
    } else {
        // Si las credenciales son incorrectas, mostrar un mensaje de error
        alert('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
    }
}

