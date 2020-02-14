function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var maximo = 10;
	var minimo = 1;
	var nota;
	nota = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);

	
	if (nota >= 9) {
		alert("Excelente. Nota:" + nota);
	} else if( nota < 4){
		alert("Vamos, la proxima se puede. Nota:"+nota);
	}else{
		alert("APROBÓ. Nota:" + nota);
	}
	

}//FIN DE LA FUNCIÓN