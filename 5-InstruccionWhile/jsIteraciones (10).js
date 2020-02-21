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
	var promedioPositivos;
	var promedioNegativos;
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




		respuesta = prompt("Querés ingresar otro nro?");
	}while(respuesta == 's');
	
	var respuesta= 's';





}//FIN DE LA FUNCIÓN