function mostrar() {
    //tomo la edad  
    var edad;

    edad = document.getElementById("edad").value;

    //Otra solucion
    /*
    if (edad < 13 || edad > 17) {
        alert("NO es adolescente.");
    }
    */

    if (!(edad >= 13 && edad <= 17)) {
        alert("NO es adolescente.");
    }
    
}//FIN DE LA FUNCIÓN