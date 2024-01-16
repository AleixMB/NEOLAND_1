/***Iteración #1: Buscar el máximo**

Completa la función que tomando dos números como argumento devuelva el más alto.

```jsx
function sum(numberOne , numberTwo) {
  // insert code
}
```*/

function sum (numberOne , numberTwo) {
    console.log(Math.max(numberOne, numberTwo));
};

sum (5,7)



/***Iteración #2: Buscar la palabra más larga**

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:

```jsx
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code
}
```
*/


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(avengers) {
  let mayor = avengers[0]; 
  for (i=0; i<avengers.length; i++){
    if(avengers[i].length > mayor.length){
      mayor = avengers[i];
    }
  }
  return mayor;
}
console.log (findLongestWord(avengers));




/**Iteración #3: Calcular la suma**

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

Puedes usar este array para probar tu función:

```jsx
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  // insert code
}*/


const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
  let numeroSumado = numbers[0];
  for (i = 1; i < numbers.length; i++){
    numeroSumado = numbers[i] + numeroSumado;
  };
  return numeroSumado;
};
console.log(sumAll(numbers));


/**Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

```jsx
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code
}
```*/

const numbers1 = [12, 21, 38, 5, 45, 37, 6];
function average(numbers1) {
  let numeroSumado1 = numbers1[0];
  for (i = 1; i < numbers1.length; i++){
    numeroSumado1 = numbers1[i] + numeroSumado1;
  };
  return numeroSumado1;
}
let media = average(numbers1) / numbers1.length
console.log (media);


/**Iteración #5: Calcular promedio de strings**

Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

```jsx
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  // insert code
}
```*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(mixedElements) {
  var numSumado = 0;
  var mixedElementsSumado = 0;
  for(let i = 0; i<mixedElements.length; i++){
    if (typeof mixedElements[i] === "string") {
      mixedElementsSumado = mixedElements[i].length + mixedElementsSumado;
    } else if (typeof mixedElements[i] === "number") {
      numSumado = mixedElements[i] + numSumado;
    }
  }
  return numSumado + mixedElementsSumado;
}
console.log (averageWord(mixedElements));


/**Iteración #6: Valores únicos**

Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

```jsx
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  // insert code
}
```*/

const duplicates = ['sushi','pizza','burger','potatoe','pasta','ice-cream','pizza','chicken','onion rings','pasta','soda'];

function removeDuplicates(duplicates) {
  let newDuplicates = [];
  for (let i = 0; i < duplicates.length; i++){
    if(newDuplicates.includes(duplicates[i])){
    }else{
      newDuplicates.push(duplicates[i]);
    }
  }
  return newDuplicates;
};
console.log (removeDuplicates(duplicates));



/**Iteración #7: Buscador de nombres**

Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true 
y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

```jsx
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param) {
  // insert code
}
```*/

const nameFinder = ['Peter','Steve','Tony','Natasha','Clint','Logan','Xabier','Bruce','Peggy','Jessica','Marc'];

function finderName(array, posicion) {
  if (array.find(i => posicion === i)){
    console.log(true, array.indexOf(posicion))
    return
  } else {
    console.log(false)
  }
};

let resultado = finderName (nameFinder, 'Clint')


/**Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

```jsx
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  // insert code
}
```*/

const counterWords = ['code','repeat','eat','sleep','code','enjoy','sleep','code','enjoy','upgrade','code'];
function repeatCounter(array, value) {
  let repeticiones = 0;
  for (let i = 0; i < array.length; i++) {
    //console.log("El valor de array en posicion de i", array[i])
    if (array[i] == value) {
      repeticiones++
      //console.log("repeticiones", repeticiones)
    }
  }
 return repeticiones
}
const resultadorRepeticiones = repeatCounter(counterWords, 'enjoy');
console.log(resultadorRepeticiones);