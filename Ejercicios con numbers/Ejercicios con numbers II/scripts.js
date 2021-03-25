
//12) Programa una función que determine si un número es primo
const PRIMOS = (num) =>{
    for (let i= 1; i<=num; i++){
        if(i!=1 && i!=num && num%i==0) return `El número ${num} no es primo, es divisible por ${i}.`
    }
    return "El número es primo"
}

console.log(PRIMOS(17));

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const PARIMPAR = (num) => num%2==0 ? `El número ${num} es PAR` : `El número ${num} es IMPAR`;
console.log(PARIMPAR(555))


//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
// pe. miFuncion(0,"C") devolverá 32°F.

const TEMPERATURE = (num, unit) => typeof(num)=='number' ?
                                          unit.toLowerCase() == "c" ? `${num}°C = ${((num*1.8)+32).toFixed(1)}°F` 
                                        : unit.toLowerCase() == "f" ? `${num}°F = ${(5/9*(num-32)).toFixed(1)}°C`
                                        : "ERROR, ingrese 'C' o 'F'" 
                                   : "Ingrese un numero"
console.log(TEMPERATURE(15, "f"));

//------------- CON IF ELSE---------------
// const TEMPERATURE = (num, unit) =>{ 
//  if(typeof(num)=='number'){
//       if (unit.toLowerCase() == "c") return `${num}°C = ${((num*1.8)+32).toFixed(1)}°F`
//       else if (unit.toLowerCase() =="f") return `${num}°F = ${(5/9*(num-32)).toFixed(1)}°C`
//       return "ERROR, ingrese 'C' o 'F'" 
//   }else return "Ingrese un número";
//   }
// console.log(TEMPERATURE(15, "f"));
