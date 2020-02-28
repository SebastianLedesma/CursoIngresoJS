function mostrar()
{
    var numero;
    var contadorPares=0;

    numero = parseInt(prompt("Ingrese un número:"));

    while(isNaN(numero)){
        numero= parseInt(prompt("Eso no es un nro.Ingrese un nro:"));
    }

    for(i = 1 ; i <= numero; i++){
        if (i % 2 == 0) {
            console.log(i);
            contadorPares++;
        }
    }

    console.log("Cantidad de pares:"+contadorPares);


}//FIN DE LA FUNCIÓN