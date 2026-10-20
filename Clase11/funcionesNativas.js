console.log("1500.75");

console.log(parseFloat("1500.75"));
console.log(parseInt("1500"));

const hoy=new Date();

console.log(hoy);

console.log(hoy.getDate());
console.log(hoy.getMonth());
console.log(hoy.getFullYear());

console.log(hoy.toLocaleDateString("es-AR"));
console.log(hoy.toLocaleTimeString("es-AR"));


function imprimirTicket(producto,precioTexto,cantidadTexto){
    let precio=parseFloat(precioTexto);
    let cant=parseInt(cantidadTexto);
    let fecha=new Date();
    let numeroTicket=Math.floor(Math.random()*1000);
    console.log("Producto:"+producto);
    console.log("Ticket Nro.:"+numeroTicket);
    console.log("Fecha.:"+fecha.toLocaleDateString("es-AR"));
    console.log("Hora.:"+fecha.toLocaleTimeString("es-AR"));
    console.log("Total:"+(cant*precio));
}

imprimirTicket("Contado","1599.75","2");


imprimirTicket("Contado","1599.75","2");