//  let / var

var nombre ="Nicolas";

if(true)
{
    var a=1;
    let b=2;
}

//console.log(a);
//console.log(b);


var valor=10;
var valor=30;
var valor=50;
//console.log(valor);

let cuota=100;
cuota=200;


for(var i=0;i<3;i++)
{
    setTimeout(()=>console.log(i));    
}

console.log("----------------");

for(let i=0;i<3;i++)
{
    setTimeout(()=>console.log(i));    
}
