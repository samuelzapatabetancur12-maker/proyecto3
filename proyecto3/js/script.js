function calculo(R){
   return Math.PI * R ** 2;

}


function calcularArea(){
   

   let radio = document.getElementById("radio").value;
   let resultado = document.getElementById("resultado");


   if(radio <= 0){
    resultado.innerText = `El radio no puede ser menor a igual a cero`;
   }else{
        let Area = calculo(radio);
         resultado.innerText = `El area del circulo es: ${Area}`;
   }
     
}