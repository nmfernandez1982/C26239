let edad=16;

if(edad>=18) /// >= <= ==
{
console.log("Sos mayor de edad");
}

let llueve=true;

if(llueve) /// if(llueve==true)
    {
    console.log("Paraguas");
    }
else
    {
    console.log("deja el paraguas")
    }



let edadPersona=15;

if(edadPersona>=18)
    {
    console.log("sos mayor de edad");
    }
  
else if(edadPersona>=13)
    {
    console.log("sos adolescente");    
    }
      else{
    console.log("Sos niño");    
    }


//operador ternario 
   //let  valor = edad >= 18 ? "sos mayor de edad" : "Sos menor de edad";

   let valor;
   if(edad >= 18)
   {
    valor="sos mayor de edad";
   }
   else
   {
    valor="Sos menor de edad";
   }



   console.log(valor);

