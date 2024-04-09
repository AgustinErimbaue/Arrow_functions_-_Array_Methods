// 1. Funciones flecha
// Convierte la siguiente función en una función flecha:
// function saludar() {
//   return "Hola";
// }

const saludar = () => {
    return 'Hola'
}


// Convierte la siguiente función en una función flecha en línea:
// function division(a,b) {
//   return a / b;
// }

const division = (a, b) => {
    return a / b
}

// Convierte la siguiente función en una función flecha:
// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;
// }


const miNombre = (nombre) => {
    return `Mi nombre es ${nombre}`
}



// Convierte las siguientes funciones en funciones flecha:
// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();
// }	

const test2 = () => {
    console.log("Funcion test 2 ejectudad")
}

const test1 = (callback) => {
    callback();
}


// 2. Foreach
// Utiliza la siguiente array para resolver los próximos ejercicios: 

let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];


// Crea un array con la gente mayor de 25 años y muéstralo por consola.
// Crea un array con la gente que empieza por J. 

const mayorDe25 = [];

gente.forEach((persona) => {
    mayorDe25.push(persona.edad > 25)
})

console.log(mayorDe25);

const genteConJ = [];

gente.forEach((persona) => genteConJ.push(persona.nombre))

console.log(genteConJ);

// 3. Map
// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
// Crea un array con la gente que empieza por J. 
// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numeros = [4, 5, 6, 7, 8, 9, 10];

const nombresConJ = gente.map((persona) => {
    if (persona.nombre[0] === "J") {
        return persona.nombre
    }
})
console.log(nombresConJ);

const elevado = numeros.map((numero) => numero ** numero)
console.log(elevado);

// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]


// 4. Filter
// Crea un segundo array que devuelva los impares
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const impares = numbers.filter((numero) => numero % 2 !== 0)
console.log(impares);

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:



const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
];
/* [
    'Que rico Tempeh me voy a comer!',
    'Que rica Tofu burguer me voy a comer!'
   ]
*/

const platoVegano = foodList.filter((vegan) => {
    if (vegan.isVeggie === true) {
        console.log(`Que rico ${vegan.name} me voy a comer`);
    }
})

console.log(platoVegano);

// 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numero2 = [39, 2, 4, 25, 62];
// Salida--> 483600

const suma = numero2.reduce((a, b) => a * b)

console.log(suma);


// Extras
// Map
// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
    {
        name: "Pepe",
        role: "The Boss",
        hobbies: ["leer", "ver pelis"],
    },
    {
        name: "Ana",
        role: "becaria",
        hobbies: ["nadar", "bailar"],
    },
    {
        name: "Luis",
        role: "programador",
        hobbies: ["dormir", "comprar"],
    },
    {
        name: "Carlos",
        role: "secretario",
        hobbies: ["futbol", "queso"],
    },
];


// Resultado esperado
/*
    [
      'Pepe es TheBoss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Ana es becaria y le gusta nadar y bailar',
      'Carlos es secretario y le gusta fútbol y queso'
    ]
 */

const frases = staff.map((personas) => (`${personas.name} es ${personas.role} y le gusta ${personas.hobbies}`))
console.log(frases)



// Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
const comidaList = ["Pizza", "Ramen", "Paella", "Entrecot"];
//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
*/

const salida = comidaList.map((comida) => {
    if (comida === "Pizza") {
        return 'Como soy de italia amo comer Pizza'
    } else if (comida === 'Ramen') {
        return 'Como soy de Japón, amo comer Ramen'
    } else if (comida === 'Paella') {
        return 'Como soy de Valencia, amo comer Paella'
    } else if (comida === 'Entrecot') {
        return 'Aunque no como carne, el Entrecot es sabroso'
    }


})

console.log(salida);


// Filter
// Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];
/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/


const menorA300 = inventory.filter((productos) => productos.price < 300)

console.log(menorA300);

// Reduce
// Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
    'Me',
    'llamo',
    /* Tu nombre aquí! */,
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'


sentenceElements.splice(2,1,"Agustin")
const oracion = sentenceElements.reduce((a, b) => {
return `${a} ${b}`
})

console.log(oracion);