function mostrar() {

	var flag = 0;
	// declarar variables
	var nro;
	var maximo;
	var minimo;
	var respuesta = 's';

	do{
		nro = parseInt(prompt("Ingrese un nro:"));

		while(isNaN(nro)){
			nro = parseInt(prompt("Error.No es un nro."));
		}

		if (flag == 0 || nro > maximo) {
			maximo = nro;
		}

		if (flag == 0 || nro < minimo) {
			minimo = nro;
			//En la primea iteracion entra en los 2 if y cuando llega acá cambia la bandera
			//entonces los flag del if van a dar siempre false y solo dependerá de la comparacion
			//con minimo y maximo.
			flag = 1;
		}

		respuesta= prompt("Deseaseguir ingresando nros?");

	}while( respuesta == 's');

	document.getElementById("maximo").value= maximo;
	document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN