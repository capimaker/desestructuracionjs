const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];
const [p1,p2,p3] = empleados;
console.log(p2); 

console.log(`el email de Luis es ${p1.email}`); 

//Cambia el nombre de la propiedad “name” por “nombre
//Extrae el nombre del Pokemon
//Extrae el tipo de Pokemon que es
//Extrae el movimiento “Tackle” 

const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
const {name:nombre} = pokemon
console.log(nombre);
const {type} = pokemon
console.log(type);
const {moves} = pokemon
const [tackle] = moves
console.log(tackle);



/* 2 Ejercicios spread/rest
Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:*/


const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}


const mergearPokemons = {
    ...pokemon,
    ...pikachu,
    name: `${pokemon.name} ${pikachu.name}`,
    ability: {
      ...pokemon.ability,
      ...pikachu.ability
    },
    stats: {
      ...pokemon.stats,
      ...pikachu.stats
    },
    moves: [
      ...pokemon.moves,
      ...pikachu.moves
    ]
  };
  
  
console.log(mergearPokemons);


/*Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
  sumEveryOther(6, 8, 2, 3, 1); //20
  sumEveryOther(11, 3, 12); //26  */ 

/* Suma todos los números de los argumentos recibidos
El operador rest (...) se usa para recoger todos los argumentos restantes en un array
En este caso, argu es un array que contiene todos los argumentos pasados a la función
La función recorre el array argu y suma todos los elementos
 La función devuelve la suma total de los números*/

  function sumEveryOther(...argu) {
    let suma = 0;
    for (let i = 0; i < argu.length; i++) {
      suma += argu[i];
    }
    return suma;
  }
  
console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
console.log(sumEveryOther(11, 3, 12)); //26


/* Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
addOnlyNums(1, 'perro', 2, 4); //7*/ 

// En este caso, args es un array que contiene todos los argumentos pasados a la función
// La función recorre el array args y suma solo los elementos que son números
// El operador typeof se usa para comprobar el tipo de cada elemento si el tipo es "number", se suma a la variable suma
// Suma solo los números de los argumentos recibidos el operador rest (...) se usa para recoger todos los argumentos restantes en un array

function addOnlyNums(...args) {  
    let suma = 0;
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] === "number") {
        suma += args[i];
      }
    }
    return suma;
  }
console.log(addOnlyNums(1, 'perro', 2, 4)); //7

/* Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
countTheArgs('gato', 'perro'); //2
countTheArgs('gato', 'perro', 'pollo', 'oso'); //4 */ 

 // Cuenta la cantidad de argumentos recibidos y devuelve el número
 //   // El operador rest (...) se usa para recoger todos los argumentos restantes en un array
// En este caso, args es un array que contiene todos los argumentos pasados a la función

function countTheArgs(...argum) {       
    return argum.length;
  }
console.log(countTheArgs('gato', 'perro')); //2
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')); //4

/* Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
*/ 
// Combina los dos arrays usando el spread operator
// y devuelve el nuevo array combinado
// El spread operator se usa para expandir los elementos de un array en otro array
// En este caso, estamos combinando arr1 y arr2 en un nuevo array usando el spread operator

function combineTwoArrays(arr1, arr2) {  
    return [...arr1, ...arr2];
  }
console.log(combineTwoArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
