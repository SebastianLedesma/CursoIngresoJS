function mostrar() {
	var numero;
	var contador = 0;
	var acumulador = 0;
	var promedio;

	while(contador < 5){
		numero = parseInt(prompt("Ingrese un nro:"));
		acumulador += numero;
		contador++;
		
	}

	promedio = acumulador / contador;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN