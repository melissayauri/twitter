window.addEventListener('load', function(event){
  /*boton enviar del formulario*/
  var buttonTweet = document.getElementById('send');
  /*variable cuando se ingresa el texto*/
  var text =   document.getElementById('input-text')
  /*variable del contendor de los nuevos textos*/
  var showText = document.getElementById('box-newtext');
  /*contador*/
  var count = document.getElementById('count');
  /*llamando al evento click*/
  buttonTweet.addEventListener('click',enterText);
  /*funcion para ingresar el texto*/
  function enterText(){
    /*valor de la entrada del texto*/
    var myText = text.value;
    /*aplica para que la entrada del texto se vacie luego del click*/
    text.value = "";
    if(myText == 0 || myText == null){
      buttonTweet.disabled = true;
    }
    else{
    /*variable de los nuevos textos*/
    var newText = document.createElement("div");
    /*incoporando el texto ingresado en los nuevos texto que se crea debajo*/
    newText.textContent = myText;
    /*creando los nuevos textos*/
    showText.appendChild(newText);}

  }
/*llamando a la tecla*/
  text.addEventListener('keydown', countCharacters);
  /**/
    function countCharacters(){
      buttonTweet.disabled=false;
      var limitedCharacters= 140;
      var size = text.value.length;
      count.innerHTML= limitedCharacters-size;

      if(size>=140){
        /*count.style.color="green";*/
        count.setAttribute("id","red");
        buttonTweet.disabled= true;
      }
      else if(size>=120 && size<=129){
        count.setAttribute("id","purple");
        buttonTweet.disabled= false;
      }
      else if(size>=130 && size<=139){
        count.setAttribute("id","blue");
        buttonTweet.disabled= false;
      }
      else{
        count.setAttribute("id","count");
      }
    }
text.addEventListener('click',enter);
function enter(){

}


  })
