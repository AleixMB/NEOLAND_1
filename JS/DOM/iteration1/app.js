/**Iteración #1: Interacción con el DOM**

Dado el siguiente HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button class="showme">Pillame!</button>
		<h1 id="pillado">Aqui estoy 8)</h1>
		<p>Soy el power ranger Amarillo</p>
    <p>Soy el power ranger Rojo</p>
    <p>Soy el power ranger Azul</p>
    <p>Soy el power ranger Negro</p>
		<h4 class="pokemon">Bulbasaur</h4>
    <h4 class="pokemon">Charmander</h4>
    <h4 class="pokemon">Pikachu</h4>
    <h4 class="pokemon">Squirtle</h4>
		<span data-function="testMe">Batman</span>
    <span data-function="testMe">Robin</span>
    <span data-function="testMe">Rick</span>
    <span data-function="testMe">Morty</span>
</body>
</html>
```

```bash
1.1 Usa querySelector para mostrar por consola el botón con la clase .**showme**

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/


//1.1 -------------------------------------------

const buttonShowMe = document.querySelector(".showme");
console.log(buttonShowMe);

//1.2 -------------------------------------------

const h1Pillado = document.querySelector("#pillado");
console.log(h1Pillado);

//1.3 -------------------------------------------

const allP = document.querySelectorAll("p");
console.log(allP);

//1.4 -------------------------------------------

const allPokemonElements = document.querySelectorAll(".pokemon");
console.log(allPokemonElements);

//1.5 -------------------------------------------

const allDataFunction = document.querySelectorAll("[data-function='testMe']");
console.log(allDataFunction);

//1.6 -------------------------------------------

const tercerPersonaje = allDataFunction[2]
console.log(tercerPersonaje);




