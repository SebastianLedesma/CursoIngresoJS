/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var cantidad;
    var marca;
    var resultado;

    cantidad = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;

    if (cantidad >= 6) {
        resultado = (cantidad * 35) / 2;
    } else {
        switch (cantidad) {
            case 5:
                if (marca == "ArgentinaLuz") {
                    resultado = (35 * 5) - ((35 * 5) * 40 / 100);
                } else {
                    resultado = (35 * 5) - ((35 * 5) * 30 / 100);
                }
                break;
            case 4:
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                    resultado = (35 * 4) - ((35 * 4) * 25 / 100);
                } else {
                    resultado = (35 * 4) - ((35 * 4) * 20 / 100);
                }
                break;
            case 3:
                if (marca == "ArgentinaLuz") {
                    resultado = (35 * 3) - ((35 * 3) * 15 / 100);
                } else if (marca == "FelipeLamparas") {
                    resultado = (35 * 3) - ((35 * 3) * 10 / 100);
                } else {
                    resultado = (35 * 3) - ((35 * 3) * 5 / 100);
                }
                break;
            default:
                resultado = 35 * cantidad;
                break;
        }
    }

    if (cantidad >= 3 && resultado >= 120) {
        resultado= resultado + (resultado * 10 / 100);
        alert("Usted pagó " + resultado + ", siendo "+ (resulta * 10 / 100) +" lo que pago de impuesto.");
    }

     document.getElementById("precioDescuento").value = resultado;

}
