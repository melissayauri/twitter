window.onload = function(){
document.getElementById('enviar').addEventListener('click',enterText);
 document.getElementById('entrada').addEventListener("keydown",validar);
}


function enterText(){

  /*variable en donde se visualizara*/
  var showText = document.getElementById('caja');
  /*obtine el texto ingresado*/
  var myText =   document.getElementById('entrada').value ;

  var newText = document.createElement("div");

  newText.innerHTML = myText;
  showText.appendChild(newText);
  /*añade ele texto en la caja de visualizacion*/
  /* showText.innerHTML = myText*/


   if(myText == 0 || myText == null){
     alert("el campo vacio");
   }
}

function validar(){
  /*incorporando la validacion*/
/*var tweet = document.formul.text;*/
/*document.getElementById("contador").innerHTML = document.getElementById('entrada').value.length;*/
var contador= document.getElementById("contador");
var boton = document.getElementById('enviar');
boton.disabled= false;
var limite = 140;
var tamaño = document.getElementById('entrada').value.length ;
var contando = document.getElementById('contador').innerHTML = limite-tamaño;
if(tamaño>=140){
  contador.style.color="red";
  boton.disabled= true;
}
else if(tamaño>=120){
  contador.style.color="blue";
  boton.disabled= false;
}
else{
  contador.style.color="black";
}
}
  /*document.formul.button.onclick = enterText;*/
