'use strict';
// Definición de la clase Zombi
class Zombi {
  constructor(nombre, puntosVida, potencia) {
    this.nombre = nombre;
    this.puntosVida = puntosVida;
    this.potencia = potencia;
  }
  atacar(objetivo) {
    console.log(
      `${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`
    );
  }
}

// Definición de la clase Jugador
class Jugador {
  constructor(nombre, ocupacion, puntosVida, faccion) { // Constructor de la clase Jugador
    this.nombre = nombre;
    this.ocupacion = ocupacion;
    this.puntosVida = 100; 
    this.faccion = faccion;
  }

  // Método para mostrar las estadísticas de los jugadores
  toString() {
    return `Nombre: ${this.nombre}, 
    Ocupación: ${this.ocupacion}, 
    Puntos de Vida: ${this.puntosVida}, 
    Facción: ${this.faccion}`;
  }
}

// Creación de dos jugadores de ejemplo
const jugador1 = new Jugador("Manuel", "Piloto", 100, "El regateador");
const jugador2 = new Jugador("Perez", "Lanzador", 100, "El de hierro");

// Mostrar información de los jugadores en la consola
console.log(jugador1.toString());
console.log(jugador2.toString());
// Abrir la terminal, ir a la carpeta de Ejercicio1 y ejecutar el js con node (node index.js)
