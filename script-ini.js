document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuarioCorrecto = "amor";
    const contrasenaCorrecta = "te amo";
    const nombreCompletoCorrecto = "joaquin ebbens";

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let fullName = document.getElementById("fullName").value;
    let errorMessage = document.getElementById("error-message");

  
    function normalizarTexto(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

  
    if (!username || !password || !fullName) {
        errorMessage.textContent = "Por favor, completa todos los campos.";
        return;
    }


    if (
        normalizarTexto(username) === normalizarTexto(usuarioCorrecto) &&
        normalizarTexto(password) === normalizarTexto(contrasenaCorrecta) &&
        normalizarTexto(fullName) === normalizarTexto(nombreCompletoCorrecto)
    ) {
        window.location.href = "carta.html";
    } else {
        errorMessage.textContent = "Datos incorrectos. Inténtalo de nuevo.";
    }
});



function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  

  heart.style.left = Math.random() * window.innerWidth + 'px';
  

  document.body.appendChild(heart);


  setTimeout(() => {
    heart.remove();
  }, 3000);
}


setInterval(createHeart, 200);
