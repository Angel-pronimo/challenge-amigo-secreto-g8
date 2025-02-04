//Decara un array vacío para guardar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Agregar amigos al array "amigos"
    let nombre = document.getElementById("amigo").value;
    amigos.push(nombre);
    console.log(amigos)
    }