// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const INVERTER = (text) => [...text].reverse().join('');
console.log(INVERTER("Jeremias"))
/*PROCESO:
a)metodo rest convierte el string en array
b) reverse ordena los elementos del array al revés
c) Join une los elementos del array en un string nuevamente*/


// /* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
//  pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
const WORDSCOUNTER =  (text, word) => array_coincidences = [...text.matchAll(word)].length;
console.log(`La palabra se repite ${WORDSCOUNTER("Pablito clavo un clavito que clavito clavo pablito en la calva de un calvito", "clavito")} veces!`);
//PROCESO:
//a)matchAll guarda todas las coincidencias en un array y luego se pide el length de este.

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo
// (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const PALINDROME_COMPROBATION = (text) =>
[...text].reverse().join('').replaceAll(" ", "").toLowerCase() ==
text.replaceAll(" ", "").toLowerCase() ? `${text} is a palindrome` : `${text} isn't a palindrome`; 
console.log(PALINDROME_COMPROBATION("Anita lava la tina"))
/*PROCESO:
1) Método rest convierte text a array y se ordena a la inversa con reverse().
2) con .join() se unen todos los elementos del array sin separación
3) con replaceAll() se reemplazan todos los espacio vacios (puede usarse la regEx = / /g tambien) 
4) se transforma a lowerCase para desestimar mayúsculas y minúsculas 
5) se compara con el texto pasado como argumento despues de quitarle espacios y pasarlo a lowerCase. 
*/



// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
//pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const DELETESOME = (text, patron) =>text.replaceAll(patron, "");
console.log(DELETESOME("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
/*PROCESO:
a) replaceAll cambia todos los elementos del text que son iguales al argumento patron por ""
*/
