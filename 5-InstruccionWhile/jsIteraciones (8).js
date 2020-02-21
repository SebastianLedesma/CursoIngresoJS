function mostrar()
{

	var nro;
	var positivo=0;
	var negativo=1;
	var respuesta='s';
	var flag = 0;

	do{
		nro = parseInt(prompt("Ingrese un nro:"));

		while(isNaN(nro)){
			nro = parseInt(prompt("Tenés que ingresar un nro.Volvé a ingresar:"));
		}

		if (nro >= 0) {
			positivo+=nro;
		} else {
			negativo*=nro;
			flag = 1;
		}

		respuesta = prompt("Querés ingresar otro nro?");
	} while(respuesta == 's');

	if (flag == 0) {
		negativo = 0;
	}


document.getElementById("suma").value=positivo;
document.getElementById("producto").value=negativo;

}//FIN DE LA FUNCIÓN