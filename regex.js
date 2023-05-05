const regex = /^[a-z]/;
const string1 = "Hola Mundo";
const string2 = "este es un texto con todas las letras en minuscula";
const string3 = "HOLA";

console.log(regex.test(string1)); 
console.log(regex.test(string2)); 
console.log(regex.test(string3));