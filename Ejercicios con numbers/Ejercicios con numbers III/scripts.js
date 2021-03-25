//15) Programa una función para convertir números de base binaria a decimal y viceversa,
// pe. miFuncion(100,2) devolverá 4 base 10.
const BASECONVERTER = (num, base) =>{
    let acum = 0;
    //multiplica cada numero por (2 elevado a su posicion)
    //se hace un reverse para que el indice del array coincida con la posicion del numero binario
    if (base==2){
        const array_num = num.toString().split('').reverse();
    for(let i = 0;i<=array_num.length-1;i++){
        acum += (array_num[i]*(2**i));
    } 
    return acum;
}

//divide el numero por 2 y sus cocientes obteniendo el numero base 2 de los restos de cada operacion + el ultimo cociente
//ordenando desde el cociente hacia atrás(haciendo un reverse para esto al final)
else if (base==10){
    array_acum=[]; 
    while(acum>=2){
        array_acum.push(num%2); // guarda los restos 
        num = Math.floor(num /=2);// divide por 2 cada vez 
    }
    array_acum.push(num); // guarda el último cociente
    return array_acum.reverse().join('')
}
}
console.log(BASECONVERTER(1001101, 2));

//16) Programa una función que devuelva el monto final después de aplicar un descuento
//a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const DESCUENTO = (num, desc) => `${num} - ${desc}% = ${num - num*desc/100}`;
console.log(DESCUENTO(151,35))

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
// pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const FECHAS = (fecha) =>{
    fecha_actual = new Date();
    if (fecha_actual.getMonth()+1 > fecha.getMonth()){ //si el mes actual es mayor al parametro
        return fecha_actual.getFullYear() - (fecha.getFullYear());  //devuelve la resta de los años
    }else if(fecha_actual.getMonth()+1 <= fecha.getMonth()){//el mes es menor al param, aún no cumplio años
        return fecha_actual.getFullYear() - (fecha.getFullYear())-1; // se resta porque aún no cumplió
    }
}
console.log(`Su edad actual es: ${FECHAS(new Date(1985,5,30))} años.`);