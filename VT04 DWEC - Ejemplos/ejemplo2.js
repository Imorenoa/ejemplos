// Crea una lista con todos los elementos td.
var listaDeValores = document.getElementsByTagName('td') 

var resultado = 0;

for (var i = 0; i < listaDeValores.length; i++) {
	// Imprime todos los elementos td
	console.log(listaDeValores[i]); 

	// Convierte el contenido de cada td en entero y los va sumando. Prueba a quitar el parseInt.
	resultado = resultado + parseInt(listaDeValores[i].innerHTML);
}

// Imprime el resultado de la suma, lo convierte a cadena de caracteres y nos devuelve cuantos caracteres tiene el resultado.
console.log("El resultado final es " + resultado + " y tiene " + String(resultado).length + " caracteres."); 


