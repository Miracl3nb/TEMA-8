/* Para practicar la encapsulación:
Crear variables las privadas 
Crear gets y sets de cada propiedad.
Utiliza los gets y sets para darle valores a 
las propiedades edad, nombre y telefono, */


//Crear clase Persona.
class Persona{
        //edad, nombre y telefono de la clase Persona.
    constructor(edad, nombre, telefono){
        this.edad = edad
        this.nombre = nombre
        this.telefono = telefono
    }
//por último muéstralas por consola.
        mostrarporconsola = function mostrarporconsola(edad,nombre,telefono){
            return this.edad + " " + this.nombre + " " + this.telefono
        }
}

//Crear un objeto persona en el main.

const persona1 = new Persona(31,"Nahuel", 1111111111)


console.log(persona1.mostrarporconsola());