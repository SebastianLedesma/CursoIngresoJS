/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero1 = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    var suma;

    suma = numero1 + numero2;

    alert("La suma es "+suma);
}

function restar()
{
    var numero1 = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    var resta;

    resta = numero1 - numero2;

    alert("La resta es " + resta);

}

function multiplicar()
{ 
    var numero1 = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    var multiplicacion;

    multiplicacion = numero1 * numero2;

    alert("La multiplicación es "+ multiplicacion);
}

function dividir()
{
    var numero1 = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    var division;

    division = numero1 / numero2;

    alert("La división es "+ division);
}

