/**Iteración #1: Usa includes**

Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

```jsx
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
```*/

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let i=0; i < products.length; i++){
  if (products[i].includes ("Camiseta")){
    console.log (products[i]);
  };
};


/**Iteración #2: Condicionales avanzados**

Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***. 

( **Mirar abajo en pistas** ).

Puedes usar este array para probar tu función:

```jsx
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
```
*/

const alumns = [
  {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
  {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
  {name: 'Juan Miranda', T1: false, T2: true, T3: true},
  {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
  {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]


/**Iteración #3: Probando For...of**

Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.

Puedes usar este array:

```jsx
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
```
*/

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (let places of placesToTravel){
  console.log (places);
}


/**Iteración #4: Probando For...in**

Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

```jsx
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
```*/

const alien = {name: 'Wormuck', race: 'Cucusumusu', planet: 'Eden', weight: '259kg'}

for (let extraterrestre in alien){
  console.log (`${alien[extraterrestre]}`);
}


/**Iteración #5: Probando For**

Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un ***console log*** el array. Puedes usar este array:

```jsx
const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
```*/

const placesToTravel1 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

const lugaresNuevos = [];

for (let i = 0; i < placesToTravel1.length; i++){
  if (placesToTravel1[i].id!==11 && placesToTravel1[i].id!==40){
    lugaresNuevos.push(placesToTravel1[i]);
  }
}

console.log(lugaresNuevos);


/**Iteración #6: Mixed For...of e includes**

Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:

```jsx
const toys = [
{id: 5, name: 'Buzz MyYear'}, 
{id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'}, 
{id: 40, name: 'El gato con Guantes'},
{id: 40, name: 'El gato felix'}
]
```*/

const toys = [
  {id: 5, name: 'Buzz MyYear'}, 
  {id: 11, name: 'Action Woman'}, 
  {id: 23, name: 'Barbie Man'}, 
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato felix'}
  ]

  let juguete  = [];

  for (const nombre of toys){
    if (!nombre.name.includes("gato")){
      juguete.push(nombre)
    }
  }
  console.log (juguete);