/* llamando a la ventana para que cargen todas la funciones*/
window.addEventListener('load', function(event) {
  /* boton tweet del formulario*/
  var buttonTweet = document.getElementById('send');
  /* variable para el textarea para ingresar el texto*/
  var text = document.getElementById('input-text');
  /* variable del contendor de los nuevos textos*/
  var showText = document.getElementById('box-newtext');
  /* contador*/
  var count = document.getElementById('count');
  /* llamando al evento click* en el boton tweet*/
  buttonTweet.addEventListener('click', enterText);
  /* funcion para ingresar el texto*/
  function enterText() {
    /* valor de la entrada del texto más la hora*/
    var myText = text.value + '<br>' + moment().format('LT');
    /* aplica para que la entrada del texto se vacie luego del click*/
    text.value = '' ;
    /* validando si se ingresa un campo vacío*/
    if (myText === 0 || myText === null) {
      /* desabilitando el botón tweet*/
      buttonTweet.disabled = true;
    } else {
      /* variable de los nuevos textos*/
      var newText = document.createElement('div');
      /* incoporando el texto ingresado en el elemento div*/
      newText.innerHTML = myText ;
      /* creando los nuevos textos*/
      showText.appendChild(newText);
    }
  }
  /* ejecutando la tecla pulsada en la entrada del texto*/
  text.addEventListener('keydown', countCharacters);
  /* función de contador de caracteres*/
  function countCharacters() {
    /* limite de caracteres permitidos, 140 palabras*/
    var limitedCharacters = 140;
    /* tamaño del texto ingresado*/
    var size = text.value.length;
    /* añadiendo al contador el conteo de manera descendente*/
    count.innerHTML = (limitedCharacters - size) - 1;
    /* validando si el texto ingresado es mayor a 140 palabras,valor negativo*/
    if (size >= 140) {
      /* incorporando el id que contiene el color rojo para el contador*/
      count.setAttribute('id', 'red');
      /* el botón se desabilita*/
      buttonTweet.disabled = true;
      /* validando si el texto ingresado tiene entre 120 y 129 caracteres */
    } else if (size >= 120 && size <= 129) {
      /* incorpora el color morado al contador */
      count.setAttribute('id', 'purple');
      /* el botón se habilita*/
      buttonTweet.disabled = false;
      /* validando si el texto ingresado tiene entre 130 y 139 caracteres */
    } else if (size >= 130 && size <= 139) {
      /* incorpora el color azul al contador */
      count.setAttribute('id', 'blue');
      /* el botón se habilita*/
      buttonTweet.disabled = false;
    } else {
      /* incorpora el color inicial al contador */
      count.setAttribute('id', 'count');
    }
  }
  /* llamando al pulsar la tecla*/
  text.addEventListener('keydown', adjustContent);
  /* funcion para que la entrada se adecue al texto*/
  function adjustContent() {
    /* se aplica al texarea para que se adecue a la altura del contenido*/
    text.style.cssText = 'height:' + text.scrollHeight + 'px';
  }
  /* llamando al evento click en el boton tweet*/
  buttonTweet .addEventListener('click', normalContent);
  /* funcion para que el texarea vuelva al estado normal despues de enviar un texto*/
  function normalContent() {
    text.style.cssText = 'height' + 'px';
  }
});
