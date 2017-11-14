window.onload = function(){
document.getElementById('enviar').addEventListener('click',enterText);
 document.getElementById('entrada').addEventListener("keydown",validar);
}


function enterText(){

  /*variable en donde se visualizara*/
  var showText = document.getElementById('caja');
  /*obtine el texto ingresado*/
  var myText =   document.getElementById('entrada').value ;
  /*añade ele texto en la caja de visualizacion*/
   showText.innerHTML = myText

   if(myText == 0 || myText == null){
     alert("el campo vacio");
   }
}

function validar(tweet){
var tweet = document.formul.text;
document.getElementById("contador").innerHTML = document.getElementById('entrada').value.length;
}
  /*document.formul.button.onclick = enterText;*/
