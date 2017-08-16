//variable que alamcena las imagenes
		var pictures = ["img/a1.jpg","img/a2.jpg", "img/a3.jpg", "img/a4.jpg"];

		for (var i = 0; i < pictures.length; i++) {

//creando el la etiqueta div que contendra mi imagen, boton eliminar
			var div = document.createElement('div')
			div.setAttribute('class', 'cssdiv')


//creando la etiqueta boton para eliminar
			var boton = document.createElement('button')
			boton.setAttribute('id', 'cssboton')
			boton.setAttribute('onclick', 'btnborrar(this)')

//creando el texto que estara en el boton
      var x = document.createTextNode("X");//es lo que me aparecera en el buton escrito Guardar
      boton.appendChild(x);
      div.appendChild(boton);

//creando la etiqueta img para inserta las imagenes
			var imagen = document.createElement('img');//creo la etiqueta img  en imagen...
			imagen.setAttribute('class', 'cssimagen');//creo atributo para poder llamar en css por la clase ___.o....
			imagen.src = pictures[i];
			div.appendChild(imagen);
			contenedor_imagenes.appendChild(div)
		}

//para borrar las imagenes una por una
     function btnborrar(b) {
     	b.parentNode.style.display = "none";
     }
//para restaurar las 4 imagenes al mismo momento

var restaurar = document.getElementById('restaurar')
restaurar.addEventListener("click", restaurarI);
		function restaurarI() {
				 var restauraimagen = document.getElementsByClassName('cssdiv');
				 for (var i = 0; i < restauraimagen.length; i++) {
				 	restauraimagen[i].style.display = "inline-block";
				 }
    }

		$(document).ready(function(){
		    $("#button").click(function(){
		        $(".parrafo").toggle();
		    });
		});

		$(document).ready(function(){
				$("#button-2").click(function(){
						$(".parrafo-2").toggle();
				});
		});
