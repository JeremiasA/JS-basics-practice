
//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const ALEATORIO = () => Math.floor(Math.random()*100+501)
console.log(`Número aleatorio entre 501 y 600: ${ALEATORIO()}`);

//10) Programa una función que reciba un número y evalúe si es capicúa o no
// (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const CAPICUA = (number) => typeof(number) == 'number' ?
         parseInt(number.toString().split('').reverse().join('')) == number ? `El número ${number} es capicúa`:
         `El número${number} NO es capicúa`:
         "Debe ingresar un número";
console.log(CAPICUA(20202));

/*11) Programa una función que calcule el factorial de un número
(El factorial de un entero positivo n, se define como el producto de todos
    los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/
const FACTORIAL = (number, array) =>{
if(typeof(number) != 'number') return "Debe ingresar un número"
if(number <= 0) return "Debe ingresar un número > 0"
for (i=number; i>0;i--)  array.push(i)
return `El factorial de ${number} es ${array.reduce((a,b) => a*b)}`
}
console.log(FACTORIAL(5, []));