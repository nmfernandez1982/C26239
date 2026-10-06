//comentario simple
/*
comentario
largo
*/ 

//string
let nombre ="Nicolas"; //texto -->string
let saludo ='Hola';

console.log("Prueba literal");
console.log(saludo);
console.log(typeof saludo);


//number

let edad=45;
let precio=99.9;
let negativo=-10;
console.log("Edad:" +edad +" "+typeof edad);
console.log("Precio:"+precio +" "+typeof precio);
console.log("Negativo:"+negativo +" "+typeof negativo);

console.log(10/0);
console.log("hola"/2);
console.log(typeof NaN);

///boolean
let mayorDeEdad=true;

let esMayor = edad>=18;

//undefined
let direccion;
console.log(typeof direccion);

//null
let mascota=null;
console.log(typeof mascota);

//bigint
let numeroGrande=56465464164466546546546464646464646464664n;
console.log(typeof numeroGrande);


let simbolo=Symbol("id");
console.log(typeof simbolo);


/*
tipos complejos o no primitivos
*/

let persona={
    nombre:"Nicolas",
    Edad:45,
    esEstudiante:false
}

console.log(typeof persona);


let frutas=["manzadas","Peras","Uvas",true,15,19.2,null];
console.log(typeof frutas);


console.log("31"-1);
console.log("31"+1); ///operador aritmetico y es un operador de concatenacion

/// + - / * %  =(asigna)   == ===

console.log("5"==5);
console.log("5"===5);


