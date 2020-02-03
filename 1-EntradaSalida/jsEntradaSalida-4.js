/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{

	//declaro una variable.
	var nombre;

	//asigno a la variable un texto por ventana emergente.
	nombre = prompt("Ingrese un nombre:");

	//asigno el valor de la ventana emergente al elemento con el id 'elNombre'.
	document.getElementById("elNombre").value = nombre;
}

