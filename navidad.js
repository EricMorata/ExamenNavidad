'use strict'

/* ventana de alerta */

setTimeout(function() {
    alert ("JO JO JO ¡Feliz Navidad!");
}, 3000);


/* Funcion para cuando haces click en la imagen del body aparezca un texto
 previamente decorado y suene un villancico */

 var image = document.getElementById("img");
 var texto = document.getElementById("saludo");
 var sonido = new Audio();
 sonido.src = ("./resources/villancico.mp3");

 image.addEventListener("click", function(){
    image.style.display = "none";
    texto.style.display = "block";
    sonido.play = "autoplay";
 });


 /*------------------------ NIEVE --------------------------*/

//esta es la funcion para crear un copo de nieve
const crearNieve = () => {
    //el elemento i se almacena en la variable copo
    let copo = document.createElement("i");
    // x representa la posicion en que se va a poner cada copo de nieve que se va a multipiplar por un numero random del ancho
    let x = innerWidth * Math.random();
    //para que los copos sean  de diferentes tamaños
    let size = Math.random()*2;
    // aqui se llama al style para decirle en que parte debe caer la nieve
    copo.style.left= x + '%';
  //aqui se llama al style para que los copos sean un random de ancho y de largo
    copo.style.width = size + '%'
    copo.style.height = size + '%'
    //el copo de nieve se esta insertando dentro del texto
    texto.appendChild(copo);
  };
  //para que se ejecute la funcion cada cierto tiempo se usa setinterval
  setInterval (crearNieve,20)