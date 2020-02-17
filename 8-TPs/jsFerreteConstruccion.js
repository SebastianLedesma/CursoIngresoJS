/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo ;
    var ancho;
    var perimetro;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);

    perimetro = (2* largo + 2* ancho) * 3;

    alert("Cantidad de alambre para el rectangulo: " + perimetro);

}
function Circulo () 
{
    var radio;
    var resultado;

    radio = parseFloat(document.getElementById("Radio").value);

    resultado = (2 * 3.1416 * radio) * 3;

    alert("Cantidad de alambre para el circulo:" + resultado);
}
function Materiales () 
{
    var largo;
    var ancho;
    var bolsaCemento;
    var bolsaCal;
    var perimetro;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);
    perimetro = (2* largo) + (2 * ancho);

    bolsaCal = perimetro * 3;
    bolsaCemento = perimetro * 2;

    alert("Perimetro:"+ perimetro+"/nBolsas de Cal: "+bolsaCal+"/nBolsa de cemento: "+ bolsaCemento);

}