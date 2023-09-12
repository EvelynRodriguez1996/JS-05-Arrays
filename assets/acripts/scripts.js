/*
Arrays

Un array es un conjunto de datos que se puede almacenar en una sola variable.  Un arreglo es una estructura de datos que podemos definir como una coleccion de variables (que pueden ser diferentes, pero con un mismo contexto.)


*/

//Variables que estan "sueltas"
let nombre = "Felipe";
let edad = 31;
let puesto = "instructor";


//Usar un array (arreglo) para "juntar" nuestras variables
//Agregamos los elementos al array separados por coma
let personasDeLaCH31 = ["Felipe", "Jose Angel", "Marco", "Evelyn", "Alejandro"];


//Podemos almacenar cualquier tipo de dato en un array
let cosasRandom = ["Pelota", 31, true, undefined, null];
console.log(typeof(cosasRandom)); //object
console.log(typeof(personasDeLaCH31));

//Al imprimir el tipo de dato de nuestro arreglo, obtenemos un object porque los arrays son objetos (despues veremos que tenemos muchos tipos de objetos)



//Los arreglos, al ser objetos, cuentan con metodos que nos permiten manipularlos



//Ya que tengo mi arreglo, como podemos acceder a esa informacion?
//Para mostrar la cantidad de elementos que tengo en un arreglo, usamos un metodo llamado length


//Metodo length para mostrar los elementos de un array
console.log(personasDeLaCH31.length);


//declarar un array
[5, 4, 3, 2, 1]


//inicializar un array
let cuentaRegresiva = [5, 4, 3, 2, 1];


//Acceder a un elemento en especifico utilizando los indices

console.log(personasDeLaCH31[0]); //Felipe
console.log(personasDeLaCH31[25]); //undefined por que elemento aun no existe

//Tambien podemos acceder a un elemento de mi arreglo por medio de una variable


//Declaro el indice en una variable
let index = 4;

//Paso esta variable como indice del arreglo
console.log(personasDeLaCH31[index]); //Alejandro



// Ejemplo de un array para un consultorio dental
let pacientes = [];

let dentistas = ["Dr. Smith", "Dra. Garcia", "Dr.House", "Dr. Simi"];

//Para hacer modificaciones, usamos el index para acceder al dato, y luego lo reasignamos

dentistas[3] = "Similares";
dentistas[8] = "Dr. Strange"; //undefined por Dr.Strange

console.log(typeof(dentistas[7]));


//Funcion para imprimis asteriscos y poner una division en la informacion de mi consola
function imprimirAsteriscos (){
    console.log("******************************************");
}


//Invocacion de la funcion
imprimirAsteriscos();


//Metodos de arrays
let listaDelSuper = ["Gansitos", "Coca-Colas", "Arroz", "Atun", "Verduritas"];


//Metodo length para conocer la longitud del array
console.log("La cantidad de elementos de mi array es de: " + listaDelSuper.length);


//Metodo push() para poner elementos al final de mi array
listaDelSuper.push("Jabon para ropa", "Jabon para trastes");

console.log(listaDelSuper);


//Metodo pop() para eliminar elementos del final del array
listaDelSuper.pop();

console.log(listaDelSuper);
console.log(listaDelSuper.length);


//Agregar un elemento al principio del array con el metodo unshift()
listaDelSuper.unshift("Sabritones");
console.log(listaDelSuper);


//Eliminar el primer elemento del array shift elimina elementos al principio del array
listaDelSuper.shift();
console.log(listaDelSuper);


//Saber la posicion de las verduritas
console.log(listaDelSuper.indexOf("Verduritas"));



//Metodo splice para agregar, eliminar o reemplzar elementos

//nombreArreglo.splice(inicio, cantidadElementosAEliminar, elementoAInsertar1, elementoAInsertar2, ...);


listaDelSuper.splice(2, 0, "Cacahuates", "Manzana"); //


//Kenia ['Gansitos', 'Coca-colas', 'Cacahuates', 'Manzana', 'Arroz', 'Atún', 'Verduritas', 'Jabón para ropa']

//Brandon ['Gansitos','Coca-Colas','Cacahuates','Manzana', 'Arroz','Atún','Verduritas','Jabón para ropa']

console.log(listaDelSuper);

listaDelSuper.splice(5, 2, "Platano");

console.log(listaDelSuper);


//Metodo .map() 

let numeros = [1, 2, 3, 4, 5];

//Crear otro arreglo con los numeros multiplicados x2 [2, 4, 6, 8, 10]


let numerosPorDos = numeros.map(function(numero){
    return numero * 2;
});


console.log(numerosPorDos);



/*

Imaginemos que tenemos un array de pacientes. Este array tiene datos registrados como nombre, edad. Necesitamos modificar este arreglo para que revisemos la edad de cada paciente, y si la edad es mayor a 40 anios, el paciente necesita una atencion especial. 


    Aspectos a considerar>

    - 2 arreglos (original y el modificado)
    - condicion if
    - funcion para agregar el nuevo dato a cada elemento
    - metodo map()
*/

//Arreglo de pacientes original
let pacientesConsultorio = [
    {   
        nombre: "Felipe", 
        edad: 31,
    },
    {
        nombre: "Fatima",
        edad: 26,
    },
    {
        nombre: "Jesus",
        edad: 51,
    }
]


//Funcion para agregar el texto Necesita atencion especial
function agregarEstadoSalud(paciente){
    let estado = "Saludable";


    //Si el paciente tiene mas de 40 anios
    if (paciente.edad>40){
        estado = "Necesita atencion especial";
    }

    return {
        ...paciente, //copia del paciente
        estadoSalud :estado, //para agregar un nuevo campo o variable (como la edad o el nombre)
    };
}


//Vamos a aplicar la funcion en cada elemento del arreglo con el map
let pacientesConsultorioConEstado = pacientesConsultorio.map(agregarEstadoSalud);

console.log(pacientesConsultorio);
console.log(pacientesConsultorioConEstado);



//Ejercicio carreritas

//Array Original
let corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];


//Jorge adelanta a Roberto (cambiamos las posiciones de Jorge y Roberto)

//Ramiro adelanta a Jorge (cambiamos las posiciones de Ramiro y Jorge)

//Roberto se lesiona y sale de la carrera (eliminamos el primer elemento)

//Andrea baja una posicion (intercambiamos las posiciones de Andrea y del ultimo corredor)

//El quinto corredor es reemplazado por Jose (cambiamos las posiciones del ultimo corredor con Jose)

//Imprimimos arreglo final