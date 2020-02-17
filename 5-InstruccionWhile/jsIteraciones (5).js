function mostrar() {

    var sexo = prompt("Ingrese f ó m .");

    //while( sexo != "f" && sexo != "m"){
    while( !(sexo == "f" || sexo == "m")){//Otra forma de preguntar.
        sexo = prompt("Dato incorrecto.Ingrese f ó m");
    }

    document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN