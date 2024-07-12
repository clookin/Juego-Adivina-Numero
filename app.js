let btnNuevoIntento = document.getElementById('reiniciar');
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let maximoIntentos = 3

function contenidoInicial (){
    asignarTextoElemento('p', 'Adivina el numero secreto entre 1 y 10');
    asignarTextoElemento('h1', 'Bienvenido a numero secreto')
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}
asignarTextoElemento('p', 'Adivina el numero secreto');
asignarTextoElemento('h1', 'Bienvenido a numero secreto')
function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}
function asignarTextoElemento(elemento, texto){
let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
function verificarIntento(intento){
    let numeroUsuario = parseInt(document.getElementById('numero').value);
        if (numeroUsuario != numeroSecreto){
            limpiarInput();
            intentos++;
            if (numeroUsuario < numeroSecreto) {
                asignarTextoElemento('p', 'El numero secreto es mayor'
                )
            } else if (numeroUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El numero secreto es menor'
                )
            }
        } else{
            asignarTextoElemento('p', `Ganaste, adivinaste el numero secreto en ${intentos} ${intentos > 1 ? 'intentos' : 'intento'} `
            )
            habilitarBoton(false);
            return;
    }
}
function limpiarInput(){
    document.getElementById('numero').value = "";
}
function habilitarBoton(estado){
    btnNuevoIntento.disabled = estado;
}
function reiniciarJuego(){
    limpiarInput();
    habilitarBoton(true);
    contenidoInicial();
}