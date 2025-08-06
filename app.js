// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; //array que va almacenar los nombres escritos por el usuario.

function asignarTextoElemento(elemento, texto){  //funcion que va servir para mandar un texto
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    nombreIngresado = document.getElementById("amigo");
    nombre = nombreIngresado.value;
    if (nombre == ""){
        alert("Debe digitar un nombre");
    }else if(amigos.includes(nombre)) { //verifico si el nombre ya fue agregado
        alert("Este nombre ya fue agregado");
        nombreIngresado.value = "";
    }
    else{
        amigos.push(nombre);  //Uso push para agregar el nombre si escribio un nombre valido
        nombreIngresado.value = "";  //vuelvo el input sin texto para que al usuario le quede mas facil para agregar otro nombre
        mostrarAmigos();  //llamo a la funcion que muestra los amigos
    }
}

function mostrarAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");
    // Limpiar la lista existente
    lista.innerHTML = "";
    // Iterar sobre el arreglo amigos y agregar cada uno como <li>
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
}