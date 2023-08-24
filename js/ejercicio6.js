'use strict'

const temporizador = document.getElementById("temporizador")
const inputTiempo = document.getElementById("inputTiempo")
const iniciar = document.getElementById("iniciar")
const pausar = document.getElementById("pausar")
const reiniciar = document.getElementById("reiniciar")

let segundos = 0
let interval
let pausa = true

const actualizarTemp = () => {
    segundos--
    if (segundos <= 0) {
        clearInterval(interval)
        pausa = true;
        segundos = 0;
        temporizador.textContent = "00:00:00"
    } else {
        const horas = Math.floor(segundos / 3600);
        const minutos = Math.floor((segundos % 3600) / 60);
        const segundosRest = segundos % 60;
        temporizador.textContent = `${agregarCeros(horas)}:${agregarCeros(minutos)}:${agregarCeros(segundosRest)}`;
    }
}

const agregarCeros = (numero) => {
    if (numero < 10) {
        return `0${numero}`;
    } else {
        return numero.toString();
    }
}



iniciar.addEventListener("click", (e) => {
    if (pausa) {
        const valorbtn = e.target.textContent;
        if (valorbtn === "Iniciar") {
            pausa = false;
            segundos = parseInt(inputTiempo.value);
            interval = setInterval(actualizarTemp, 1000);
        }
    }
})



pausar.addEventListener("click", () => {
    clearInterval(interval);
    pausa = true;
})

reiniciar.addEventListener("click", () => {
    clearInterval(interval);
    pausa = true;
    temporizador.textContent = "00:00:00";
    segundos = 0;
});