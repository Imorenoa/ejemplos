
var listaEnlaces = document.getElementsByTagName('u');

// listaEnlaces = [PATATAS, MACARRONES, COLIFLOR]

var tamaño;

for (var i = 0; i < listaEnlaces.length; i++) {
	console.log(listaEnlaces[i].innerHTML);
	listaEnlaces[i].onclick = function() {
								document.getElementById('eleccion').innerHTML = this.innerHTML;
								console.log(i);
								
								}					
								
						}

var tamaño = style.getPropertyValue(fontSize);
console.log(tamaño);