//21) Programa una función que dado un array numérico devuelve otro array con los
// números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const CUADRADO = (nums) => nums.map(x => x**2);
console.log(CUADRADO([2,4,8]));

//22) Programa una función que dado un array devuelva el número mas alto y el más 
//bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const MINMAX = (nums) => `Mínimo: ${Math.min(...nums)}, Máximo: ${Math.max(...nums)}`;
console.log(MINMAX([2,4,8,-101, 100, 102, 67, 154]));

//23) Programa una función que dado un array de números devuelva un objeto con 2 
//arreglos en el primero almacena los números pares y en el segundo los impares, 
//pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const PARIMPAR = (nums) =>{
    numeros = {};
    numeros.pares = nums.filter(x => x%2==0)
    numeros.impares= nums.filter(x => x%2!=0)
    return numeros;
} 
console.log(PARIMPAR([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))
