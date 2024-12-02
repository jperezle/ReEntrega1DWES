'use strict';
// Clase base Zombi
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

// Subclase Abominacion que hereda de Zombi
class Abominacion extends Zombi {
  constructor(nombre, puntosVida, potencia) {
    super(nombre, puntosVida, potencia); // Llamada al constructor de Zombi
  }

  // Método que realiza 3 ataques seguidos
  ataqueMultiple(objetivo) {
    console.log(`${this.nombre} realiza un ataque múltiple a ${objetivo}:`);
    for (let i = 0; i < 3; i++) { // Bucle para realizar los 3 ataques
      this.atacar(objetivo); // Llamada al método atacar sin declarar el objetivo
    }
  }
}

// Crear un objeto Abominacion
const abominacion = new Abominacion("Abominación Pedro", 150, 25); // El parámetro de potencia (25) indica el daño que causa

// Ejecutar el ataqueMultiple
abominacion.ataqueMultiple("Perez"); // Declaramos el objetivo para que aparezca
// Abrir la terminal, ir a la carpeta de Ejercicio2 y ejecutar el js con node (node index.js)
