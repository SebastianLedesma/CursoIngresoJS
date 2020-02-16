/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    precioUno = parseFloat(document.getElementById("PrecioUno").value);
    precioDos = parseFloat(document.getElementById("PrecioDos").value);
    precioTres = parseFloat(document.getElementById("PrecioTres").value);

    resultado = precioUno + precioDos + precioTres;
    alert("Resultado:" + resultado);
}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    precioUno = parseFloat(document.getElementById("PrecioUno").value);
    precioDos = parseFloat(document.getElementById("PrecioDos").value);
    precioTres = parseFloat(document.getElementById("PrecioTres").value);

    resultado = (precioUno + precioDos + precioTres) / 3;
    alert("Resultado:" + resultado);
}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    precioUno = parseFloat(document.getElementById("PrecioUno").value);
    precioDos = parseFloat(document.getElementById("PrecioDos").value);
    precioTres = parseFloat(document.getElementById("PrecioTres").value);

    resultado = (precioUno + precioDos + precioTres) * 1.21;
    alert("Resultado:" + resultado);
}