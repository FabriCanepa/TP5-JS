'use strict'

const actualizarReloj = () => {
    const reloj = document.getElementById("reloj");
    const fecha = document.getElementById("fecha");

    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const dia = ahora.getDate();
    const mes = ahora.toLocaleString('default', { month: 'long' });
    const año = ahora.getFullYear();

    reloj.textContent = `${hora}:${agregarCeros(minutos)}:${agregarCeros(segundos)}`;
    fecha.textContent = `${dia} de ${mes} de ${año}`;
}

const agregarCeros = (numero) => {
    return numero < 10 ? `0${numero}` : numero;
}
setInterval(actualizarReloj, 1000);

actualizarReloj();