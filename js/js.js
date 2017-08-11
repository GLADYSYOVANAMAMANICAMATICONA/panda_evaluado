		var pictures = ["img/a1.jpg","img/a2.jpg", "img/a3.jpg", "img/a4.jpg"];

		for (var i = 0; i < pictures.length; i++) {
			var div = document.createElement('div')
			div.setAttribute('class', 'cssdiv')

			var boton = document.createElement('button')
			boton.setAttribute('id', 'cssboton')

            var x = document.createTextNode("X");//es lo que me aparecera en el buton escrito Guardar
            boton.appendChild(x);
            div.appendChild(boton);

			var imagen = document.createElement('img');//creo la etiqueta img  en imagen...
			imagen.setAttribute('class', 'cssimagen');//creo atributo para poder llamar en css por la clase ___.o....
			      imagen.src = pictures[i];
			      div.appendChild(imagen);
			      contenedor_imagenes.appendChild(div)
			      
		}

		
      cssboton.onclick = function () {
      	
      	contenedor_imagenes.removeChild(div);
      }
