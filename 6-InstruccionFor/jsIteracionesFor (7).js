function mostrar()
{
    var numero;
    var contadorDivisores=0;

    do{
        numero= parseInt(prompt("Ingrese un numero:"));
    }while(isNaN(numero));

    for(var i = 1; i <= numero; i++){
        if(numero % i == 0){
            console.log(i);
            contadorDivisores++;
        }
    }

    console.log("Cantidad de divisores:"+contadorDivisores);

}//FIN DE LA FUNCIÓN