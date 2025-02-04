//Decara un array vacío para guardar los nombres de los amigos
let amigos = [];

// Función para validar si el casillero está vacío
function validarEntrada() {
    let nombre = document.getElementById("amigo").value.trim();
    // Dar una alerta si el casillero está vacío
    if (nombre.length === 0) {
        alert("Por favor, inserte un nombre.");
        return false;
    }
    return true;
}


// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Validar que el casillero no esté vacío
    if (validarEntrada(true)) {
    // Agregar una lista de amigos
    let nombre = document.getElementById("amigo").value;
    amigos.push(nombre);
    console.log(amigos);
    // Mostrar la lista de amigos
    mostrarListaDeAmigos();    
    // Limpiar la caja de texto
    limpiarcaja();    
    return;
    }
}

// Función para mostrar la lista de amigos
function mostrarListaDeAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    //bucle para mostrar la lista de amigos
    amigos.forEach(nombre => {
        lista.innerHTML += `<li>${nombre}</li>`;    
    });
}

// Función para validar que haya al menos 2 amigos en la lista
function validarMinimoAmigos() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos en la lista para sortear.");
        return false;
    }
    return true;
}

// Función para aplicar animación shake a la imagen
function aplicarShake() {
    let imagen = document.querySelector("img");
    //agrergar la clase shake
    imagen.classList.add("shake");
}

// Función para resetear el efecto shake
function resetShake() {
    let imagen = document.querySelector("img");
    imagen.classList.remove("shake");
    void imagen.offsetWidth; // Trigger reflow to restart the animation
    imagen.classList.add("shake");
} 

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Llamar a la función shake(amima la imagen)
    aplicarShake();
    // Validar que la lista no esté vacía y que haya al menos dos amigos
    if (!validarListaVacia() || !validarMinimoAmigos()) {
        return;
    }
    // Generar un número aleatorio
    let amigoSecreto = Math.floor(Math.random() * amigos.length);
    // Borrar la lista de amigos
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    // Mostrar el amigo secreto
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigos[amigoSecreto]}`;
    // Deshabilitar el botón de sorteo
    document.getElementById("botonSortear").disabled = true;
    // Reiniciar el juego después de mostrar el resultado despues de 3seg
    setTimeout(() => {
        // Rehabilitar el botón de sorteo
        document.getElementById("botonSortear").disabled = false;
        // Reiniciar el juego
        reiniciarJuego();
}, 3000);
    resetShake();
    return;    
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = [];
    mostrarListaDeAmigos();
    document.getElementById("resultado").innerHTML = "";    
}

// Función para validar que la lista no esté vacía
function validarListaVacia() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Por favor, agregue amigos antes de sortear.");
        return false;
    }
    return true;
}

    // Función para limpiar la caja de texto
function limpiarcaja() {
    // Limpiar el contenido de la caja de texto
    document.getElementById("amigo").value = "";
}