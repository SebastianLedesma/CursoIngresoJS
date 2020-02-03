/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    //declaro una variable que almacenara el contenido del input.
    var nombre;
    
    //asigno el contenido del input a la variable.
    nombre = document.getElementById("elNombre").value;

    //muestro el mensaje por ventana.
    alert("El nombre ingresado es " + nombre);
}


