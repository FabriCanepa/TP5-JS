'use strict'

class Persona {
    constructor(nombre, edad, DNI, sexo, peso, altura, nacimiento) {
        this.nombre = nombre,
        this.edad = edad,
        this.dni = DNI,
        this.sexo = sexo,
        this.peso = peso,
        this.altura = altura,
        this.nacimiento = nacimiento
    }

    mostrarGeneracion () {
        switch(this.nacimiento) {
            case (this.nacimiento >= 1994 && this.nacimiento <= 2010):
                console.log(`${this.nombre} pertenece a la generación Z`);
            break;

            case (this.nacimiento >= 1981 && this.nacimiento <= 1993):
                console.log(`${this.nombre} pertenece a la generación Y`);
            break;

            case (this.nacimiento >= 1969 && this.nacimiento <= 1980):
                console.log(`${this.nombre} pertenece a la generación X`);
            break;

            case (this.nacimiento >= 1949 && this.nacimiento <= 1968):
                console.log(`${this.nombre} pertenece a la generación Baby Boom`);
            break;

            case (this.nacimiento >= 1930 && this.nacimiento <= 1948):
                console.log(`${this.nombre} pertenece a la generación Silent`);
            break;
            default: console.log('No es un año válido');
        }
    }

    crearPersona () {
        const nombre = document.getElementById('input-nombre').value;
        const edad = parseInt(document.getElementById('input-edad').value);
        const genero = document.getElementById('input-genero').value;
        const dni = parseInt(document.getElementById('input-dni').value);
        const peso = parseFloat(document.getElementById('input-peso').value);
        const altura = parseFloat(document.getElementById('input-altura').value);
        const nacimiento = new Date(document.getElementById('input-nacimiento').value);

        const personaNueva = new Persona(nombre, edad, dni, genero, peso, altura, nacimiento);
    }

    esMayorDeEdad () {
        const actualidad = new Date().getFullYear();
        const edad = actualidad - this.nacimiento

        if (edad >= 18) {
            console.log(`${this.nombre} es mayor de edad`);
        } else {
            console.log(`${this.nombre} aún no es mayor de edad`);
        }
    }

    mostrarInfo () {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`DNI: ${this.dni}`);
        console.log(`Genero: ${this.sexo}`);
        console.log(`Peso: ${this.peso}`);
        console.log(`Altura: ${this.altura}`);
        console.log(`Año de nacimiento: ${this.nacimiento}`);
    }
}


    document.querySelector("form").addEventListener("submit",  (event) => {
        event.preventDefault();
        const persona = new Persona();
        persona.crearPersona();
    });


