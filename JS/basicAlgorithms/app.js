/*
Iteración #1: Variables
1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
1.2 Crea una variable llamada x, asigna el valor 50 a ella.
1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
*/ 

//1.1 ---------------------------------------------

let myFavoriteHero = "Hulk";

//1.2 ---------------------------------------------

let x = 50;

//1.3 ---------------------------------------------

let h = 50;
let y = 10;

//1.4 ---------------------------------------------

let z = h + y;


/* Iteración #2: Variables avanzadas
1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};

1.2 Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24; 
Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
/
1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000}; 
*/


//1.1 ---------------------------------------------

const character = {name: 'Jack Sparrow', age: 10};

character.age = 25;
//console.log (character);

//1.2 ---------------------------------------------

let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;

console.log ("Soy " + firstName , lastName +", tengo" , age + " años y me gustan los lobos." );

//1.3 ---------------------------------------------

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

let suma = toy1.price + toy2.price;

console.log (suma);

//1.4 ---------------------------------------------

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
//console.log (globalBasePrice)

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
/*console.log (car1.finalPrice);
console.log (car2.finalPrice);*/


/*
Iteración #3: Operadores
1.1 Multiplica 10 por 5 y muestra el resultado mediante console.

1.2 Divide 10 por 2 y muestra el resultado en un console.

1.3 Muestra mediante un console el resto de dividir 15 por 9.

1.4 Usa el correcto operador de asignación que resultará en o = 15, 
teniendo dos variables p = 10 y j = 5.

1.5 Usa el correcto operador de asignación que resultará en i = 50,
teniendo dos variables c = 10 y m = 5.
*/


//1.1 ---------------------------------------------

let num1 = 10;
let num2 = 5;

let multiplicacion = num1 * num2;

console.log (multiplicacion);

//1.2 ---------------------------------------------

let num3 = 2;

let division = num1 / num3;

console.log (division);

//1.3 ---------------------------------------------

let a = 15;
let b = 9;

let resto = a % b;
console.log (resto);

//1.4 ---------------------------------------------

let p = 10;
let j = 5;

let o = p + j;
//console.log (o);

//1.5 ---------------------------------------------

let c = 10;
let m = 5;

let l = c * m;
//console.log (i);


/*
Iteración #4: Arrays
1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
*/

//1.1 ---------------------------------------------

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

let primero = avengers[0];
//console.log(primero);

//1.2 ---------------------------------------------

avengers[0] = "IRONMAN";
//console.log (avengers);

//1.3 ---------------------------------------------

console.log (avengers.length);

//1.4 --------------------------------------------

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push ('Morty');
rickAndMortyCharacters.push ('Summer');
//console.log (rickAndMortyCharacters);

let ultimo = rickAndMortyCharacters[rickAndMortyCharacters.length-1];
console.log (ultimo);

//1.5 --------------------------------------------

const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters2.pop();
//console.log (rickAndMortyCharacters2);

let uno = rickAndMortyCharacters2[0];
let last = rickAndMortyCharacters2[rickAndMortyCharacters2.length-1];
console.log (uno , last);

//1.6 --------------------------------------------

const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

let elim2 = rickAndMortyCharacters3.splice(1, 1);
//console.log (elim2);
console.log (rickAndMortyCharacters3);



/*Iteración #5: Condicionales
En base al código siguiente, muestra los mensajes correctos por consola.
const number1 = 10;
const number2 = 20;
const number3 = 2;


if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if () {
  console.log("number2 dividido entre number1 es igual a 2");
}

if () {
  console.log("number1 es estrictamente distinto a number2");
}

if () {
  console.log("number3 es distinto number1");
}

if () {
  console.log("number3 por 5 es igual a number1");
}

if (/) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if () {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}*/


const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2/number1 == 2) {
	console.log("number2 dividido entre number1 es igual a 2");
  };

if (number1!==number2) {
	console.log("number1 es estrictamente distinto a number2");
  };

if (number3 != number1) {
	console.log("number3 es distinto number1");
  };

if (number3 * 5 == number1) {
	console.log("number3 por 5 es igual a number1");
  };

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
  };

if (number2 / 2 == number1 || number1 / 5 == number3 ) {
	console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
  };


 /* Iteración #6: Bucles

1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.

1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'. */
  

//1.1 --------------------------------------------

for (let i = 0; i <= 9 ; i++){
	console.log(i)
};

//1.2 --------------------------------------------

for (let i = 0; i <= 9 ; i++){
	if (i%2 == 0){
		console.log (i);
	};	
};

//1.3 --------------------------------------------

let i = 0; 
if (i<10){
	for (; i < 9 ; i++){
		console.log("Intentando dormir 🐑")
	};
	
}
else (i=9);{
	console.log("Dormido!")
};