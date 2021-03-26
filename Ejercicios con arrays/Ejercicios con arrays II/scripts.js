//24) Programa una función que dado un arreglo de números devuelva un objeto con dos
//arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo
// de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8],
// desc: [8,7,7,6,5] }.
const ORDENAR = (nums) =>{
    ordenados={};
    ordenados.ascendente = [...nums].sort((a,b)=> a-b);
    ordenados.descendente = [...nums].sort((c,d)=> -c+d);
    return ordenados;
}
console.log(ORDENAR([2,6,9,56,34,21,66,63]));

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá 
//["x", 10, 2, "10", true].
const DUPLICADOS = (nums) => Array.from(new Set(nums));
console.log(DUPLICADOS(["x", 10, "x", 2, "10", 10, true, true]));

//26) Programa una función que dado un arreglo de números obtenga el promedio,
// pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const PROMEDIO = (nums) => (nums.reduce((a,b)=>(a+b)))/nums.length;
console.log(PROMEDIO([9,8,7,6,5,4,3,2,1,0]));