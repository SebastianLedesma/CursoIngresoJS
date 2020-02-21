function mostrar() {

	var nro;
	var contador = 0;//inicializo porque la primera vez que uso le agrego valores 
	//y estos se deben agregar a un valor inicial.
	var acumulador = 0;
	var respuesta;
	var promedio;

	do {
		nro = parseInt(prompt("Ingrese un número:"));
		while (isNaN(nro)) {
			nro = parseInt(prompt("Tenés que ingresar un nro. Reingresalo:"));
		}

		acumulador += nro;//el acumulador primero se lee(lado izquierdo del igual) y despues se suma.
		contador++;

		respuesta =prompt("Querés seguir ingresando?");
	} while (respuesta == 's');

	promedio = acumulador / contador;


	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN