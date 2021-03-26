//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
// pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const CONTADOR = (text) =>{
    regExNoVoc = /[^aeiuo ]/ig; //coincide todo menos lo que esta entre corchetes
    regExVoc = /[aeiuo]/ig;//coincide solo lo que esta entre corchetes
    return `Vocales: ${text.match(regExVoc).length}, Consonantes: ${text.match(regExNoVoc).length}`;
}
console.log(CONTADOR("Hola Mundo"));

//19) Programa una función que valide que un texto sea un nombre válido, 
//pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const VALIDAR = (text) =>{
    regEx = /^[a-z]{3,} {1}[a-z]{3,}$/i;
    return regEx.test(text) ? "Nombre válido" : "Nombre no válido. Debe ingresar nombre y apellido con al menos 3 letras"; 
}
console.log(VALIDAR("werwe sdsdf"));

//20) Programa una función que valide que un texto sea un email válido,
//pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const VALIDAR_MAIL = (text) =>{
    regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;//w3
    return regEx.test(text) ? "Email válido" : "Email no válido"; 
}
console.log(VALIDAR_MAIL("jeremiasamestoy@gmail.com"));
// 