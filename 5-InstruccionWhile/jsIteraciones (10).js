function mostrar()
{
	//declarar contadores y variables
	var nro;
	var cantPositivos =0;
	var cantNegativos=0;
	var cantCeros=0;
	var sumaPositivos=0;
	var sumaNegativos=0;
	var cantPares=0;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var diferenciaPosNeg;
	var respuesta;

	do{
		nro = parseInt(prompt("Ingrese un nro:"));

		while(isNaN(nro)){
			nro = parseInt(prompt("Error.Debe ingresar un nro:"));
		}

		if(nro < 0){
			cantNegativos++;
			sumaNegativos+=nro;
		}else if(nro == 0){
			cantCeros++;
		}else{
			cantPositivos++;
			sumaPositivos+=nro;
		}

		if (nro % 2 == 0) {
			cantPares++;
		}

		respuesta = prompt("Querés ingresar otro nro?");
	}while(respuesta == 's');


	if ( cantPositivos !=0) {
		promedioPositivos = sumaPositivos / cantPositivos;
	}
	
	if (cantNegativos !=0) {
		promedioNegativos = sumaNegativos / cantNegativos;
	}
	diferenciaPosNeg = cantPositivos - cantNegativos;

	document.write("Suma de negativos:"+sumaNegativos+"<br>");
	
	document.write("Suma de positivos:"+sumaPositivos+"<br>");
	document.write("Cantidad de positivos:"+cantPositivos+"<br>");
	document.write("Cantidad de negativos:"+cantNegativos+"<br>");
	document.write("Cantidad de ceros:"+cantCeros+"<br>");
	document.write("Cantidad de números pares:"+cantPares+"<br>");
	document.write("Promedio de positivos:"+promedioPositivos+"<br>");
	document.write("Promedio de negativos:"+promedioNegativos+"<br>");
	document.write("Diferencia entre posotivos y negativos:"+diferenciaPosNeg+"<br>");


}//FIN DE LA FUNCIÓN