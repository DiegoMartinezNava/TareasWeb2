let nombre = prompt("Ingresa tu nombre: ");
let apellido = prompt("Ingresa tu apellido: ");
let peso = prompt("¿Cuánto pesas? ");
let altura = prompt("¿Cuanto mides? ");
let alturapordos = parseFloat(altura) * parseFloat(altura);
let masacorporal = parseInt(peso) / parseFloat(alturapordos);

console.log("Tu nombre es: " + nombre);
console.log("Tu apellido es: " + apellido);
console.log("Tu peso es: " + peso);
console.log("Tu altura es: " + altura);
console.log("Tu indice de masa corporal es: " + masacorporal);

console.log(typeof masacorporal);