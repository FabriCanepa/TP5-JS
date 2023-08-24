'use strict'

const cronometro = document.getElementById("cronometro")
const iniciar = document.getElementById("iniciar")
const pausar = document.getElementById("pausar")
const reiniciar = document.getElementById("reiniciar")

let segundos = 0
let interval;
let enPausa = true

let segPausado = 0

const actCronometro = () => {
    segundos++;
    const horas = Math.floor(segundos / 3600)
    const minutos = Math.floor((segundos % 3600) / 60)
    const segundosRest = segundos % 60

    cronometro.textContent = `${agregarCeros(horas)}:${agregarCeros(minutos)}:${agregarCeros(segundosRest)}`
}

const agregarCeros = (numero) => {
    return numero < 10 ? `0${numero}` : numero;
}

iniciar.addEventListener("click", (e) => {
    if (enPausa) {
        const valorbtn = e.target.textContent;
        if (valorbtn === "Iniciar") {
            interval = setInterval(actCronometro, 1000);
            enPausa = false;
        }
    }
});

pausar.addEventListener("click", () => {
    clearInterval(interval)
    enPausa = true;
    cronometro.textContent = "00:00:00";
    segPausado = segundos  //no se como hacer para que se queden los segundos pausados
})

reiniciar.addEventListener("click", () => {
    clearInterval(interval);
    enPausa = true;
    segundos = 0;
    cronometro.textContent = "00:00:00";
})

