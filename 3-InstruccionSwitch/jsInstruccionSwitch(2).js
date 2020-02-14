function mostrar() {
    //tomo la edad  
    var mes = document.getElementById('mes').value;

    switch (mes) {
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            alert("Falta para el invierno!!!");
            break;
        case "Julio":
        case "Agosto":
            alert("Abrigate que hace frio!!!");
            break;
        default://al descartar todas las opciones anteriores las opciones que restan entran acá.
            alert("Ya pasamos el frio. Hace calor!!!");
            //no hace falta cerrar el default con break porque es lo ultimo que se ejecuta y sale de la estructura
    }


}//FIN DE LA FUNCIÓN