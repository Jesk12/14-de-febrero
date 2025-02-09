document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuarioCorrecto = "amor";
    const contrasenaCorrecta = "te amo";
    const nombreCompletoCorrecto = "joaquin ebbens"; // Reemplaza con el nombre real

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let fullName = document.getElementById("fullName").value;
    let errorMessage = document.getElementById("error-message");

    // Verifica que ningún campo esté vacío
    if (!username || !password || !fullName) {
        errorMessage.textContent = "Por favor, completa todos los campos.";
        return;
    }

    // Validar credenciales
    if (username === usuarioCorrecto && password === contrasenaCorrecta && fullName === nombreCompletoCorrecto) {
        window.location.href = "carta.html";
    } else {
        errorMessage.textContent = "Datos incorrectos. Inténtalo de nuevo.";
    }
});


function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  
  // Posicionar el corazón aleatoriamente en el ancho de la página
  heart.style.left = Math.random() * window.innerWidth + 'px';
  
  // Añadirlo al body
  document.body.appendChild(heart);

  // Eliminar el corazón después de que haya caído
  setTimeout(() => {
    heart.remove();
  }, 3000);
}

// Crear un corazón cada 0.5 segundos
setInterval(createHeart, 200);
