let boton = alert("ingresa tu nombre")
console.log(boton);

function validarNombre() {
    var username = document.getElementById('username').value;
    if (username.trim() === '') {
        alert('Por favor, ingrese su nombre.');
    } else {
        saludar(username);
        window.location.href = "calculadora.html";
    }
}

function saludar(username) {
    alert('¡Hola, ' + username + ' bienvenido al programa beta de HTML, CSS y JavaScript de Carlos!');
}
