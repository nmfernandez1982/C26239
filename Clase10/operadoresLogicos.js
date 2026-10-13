//    >   <  >=  <=  ==  === !=


// && ||

// && ----> ambas condiciones de tiene que cumplir v

 //V V = V
 //F V = F
 //V F = F
 // F F =F

 console.log(10==="10"); //false
  console.log(10=="10"); //true


 let edad=18
 let esBonaerense=true;

//  if(edad>=18 && esBonaerense)
//  {
//     console.log("Ingreso valido");  
//  }
//  else
//  {
//         console.log("Ingreso no valido");  
//  }




 //or 
 //V V = V
 //V F = V
 // F V= V
 //F F = F


 edad=12
 esBonaerense=false;

 if(edad>=18 || esBonaerense)
 {
    console.log("Ingreso valido");  
 }
 else
 {
    console.log("Ingreso no valido");  
 }


