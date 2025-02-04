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

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Validar que el casillero no esté vacío
    if (validarEntrada(true)) {
    // Agregar una lista de amigos
    let nombre = document.getElementById("amigo").value;
    amigos.push(nombre);
    console.log(amigos);    
    return;
    }