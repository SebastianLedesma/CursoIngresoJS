/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    //Variable que guarda el contenido del input con id 'elNombre'.
    var nombre;
    //Variable que guarda el contenido del input con id 'laEdad'.
    var edad;

    //Almacena el contenido del input con id 'elNombre' en la var nombre.
    nombre = document.getElementById("elNombre").value;
    //Almacena el contenido del input con id 'laEdad' en la var edad.
    edad = document.getElementById("laEdad").value;

    //Muestro un mensaje que contenga los valores de las variables.
    alert("Usted se llama " + nombre + " y tiene " + edad + " años.");
}

