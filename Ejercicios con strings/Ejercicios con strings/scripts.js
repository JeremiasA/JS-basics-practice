// EJERCICIOS CON STRINGS PARA EL CURSO DE JAVASCRIPT CON #JONMIRCHA
// LOS RESULTADOS SE MUESTRAN POR CONSOLA

let errMessage= "Error, asegurese de que los datos sean cadena de texto";

// EJERCICIO 1: CONTAR NUMERO DE CARACTERES DE UNA CADENA
 const CHARACTERSCOUNT = (text) => typeof(text)=="string" ? text.length : errMessage;
    console.log(CHARACTERSCOUNT("Hello! Its code"));
    
// EJERCICIO 2: RECORTAR TEXTO SEGUN NUMERO INDICADO
const CHARTRIMMER = (text, num) => typeof(text)=="string" ? text.slice(0,num) :errMessage;
    console.log(CHARTRIMMER("Hello, Im coding with Javascript EC6", 12));
   
// EJERCICIO 3: DEVOLVER ARRAY DE TEXTOS SEPARADOS POR CARACTER INDICADO
const SEPARATETEXT = (text, separator) => typeof(text)=="string" ? text.split(separator) : errMessage;
  console.log(SEPARATETEXT("Hello, my name is Jeremias and im studing", " "));

//  EJERCICIO 4: REPETIR UN TEXTO N VECES
 const REPEAT = (text, num)=> typeof(text)=="string" ? text.repeat(num) :  errMessage;
    console.log(REPEAT("THIS IS JS", 5));