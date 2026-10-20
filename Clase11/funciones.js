//funciones sin parametros.
// function darBienvenida(){
//     let prueba=1;
//         if(prueba==1)
//         {
//             console.log(prueba);  
//         }
//     console.log("Hola mundo");
// }

//darBienvenida();
// darBienvenida();
// darBienvenida();
// darBienvenida();
// darBienvenida();
// darBienvenida();


//funcion con parametros--->argumento

// function saludarCliente(cliente){
// console.log("Hola "+cliente+", Bienvenido a la aplicacion");
// }
// saludarCliente("julieta");
// saludarCliente("Luis");

// function pedirCafe(cliente,cafe){
//     console.log("El cliente pidio: "+ cafe + " Su monbre es: "+cliente)
// }
// pedirCafe("Julieta","Cafe con leche");

function calcularPrecio(precioUnitario,cantidad){
    let total=(precioUnitario*cantidad);
    //console.log("Total a pagar: "+total)
    return total;
}




subTotal=calcularPrecio(1500,2);
//calcularPrecio(3000,25);

console.log(subTotal);


if(subTotal>4500)
{
    console.log("Te vamos a hacer un descuento");
}



