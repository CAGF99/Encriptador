//Probando
const regex = /^[a-z\s]+$/;
const string1 = "Hola Mundo";
const string2 = "este es un texto con todas las letras en minuscula";
const string3 = "HOLA";
const string4 = "César";
const string5 = "césar";
const string6 = "@a";

console.log(regex.test(string1)); 
console.log(regex.test(string2)); 
console.log(regex.test(string3));
console.log(regex.test(string4));
console.log(regex.test(string5));
console.log(regex.test(string6));