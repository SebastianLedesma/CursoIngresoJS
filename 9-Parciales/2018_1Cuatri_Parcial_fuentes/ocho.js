function mostrar()
{
    var letra;
    var seguir;
    var numero;
    var contadorPar=0;
    var contadorImpar=0;
    var contadorCero=0;
    var contadorPositivo=0;
    var acumuladorPositivo=0;
    var acumuladorNegativo=0;
    var flag=0;
    var maximo;
    var minimo;
    var letraMaximo;
    var letraMinimo;
    var promedioPositivo=0;//lo inicializo en 0 en caso de que el usuario no

    //---------------------repito hasta que el usuario quiera----------------------------------
    do{
        letra = prompt("Ingrese una letra:");

        while (!((letra >= 'A' || letra <= 'Z') ||(letra >= 'a' || letra <= 'z'))) {
            letra= prompt("Eso no es una letra.Ingrese una letra.");
        }

        numero = parseInt(prompt("Ingrese un numero:"));
        while(numero < -100 || numero > 100 || isNaN(numero)){
            numero = parseInt(prompt("Eso no es un numero.Ingrese un numero:"));
        }
        
        //------------analizo los datos--------------
        //------------paridad-------------------
        if (numero % 2 != 0) {
            contadorImpar++;
        } else {
            contadorPar++;
        }


        if (numero == 0) {
            contadorCero++;
        } else if(numero > 0){
            acumuladorPositivo+=numero;
            contadorPositivo++;
        }else{
            acumuladorNegativo+=numero;
        }


        //------------------------
        if(flag == 0 || numero < minimo){//entra en la primera porque el flag esta en 0.
            minimo = numero;
            letraMinimo= letra;
        }

        if(flag == 0 || numero > maximo){//entra en la primera porque el flag esta en 0.
            //Al pasar se cambia el flag y en la sig iteracion solo evalua si el numero es mayor o menor.
            maximo = numero;
            letraMaximo= letra;
            flag = 1;
        }

        seguir = prompt("Desea continuar?");
    }while(seguir == 's');


    //---------------promedio---------------------

    if (contadorPositivo != 0) {
        promedioPositivo = acumuladorPositivo / contadorPositivo;
    }

    document.write("La cantidad de nros pares es"+ contadorPar+"</br>");
    document.write("La cantidad de impares es "+contadorImpar+"</br>");
    document.write("La cantidad de ceros es "+contadorCero+"</br>");
    document.write("Promedio de positivos:"+promedioPositivo+"</br>");
    document.write("La suma de los negativos es "+acumuladorNegativo+"</br>");
    document.write("El nro maximo es "+maximo+" y la letra es "+ letraMaximo+"</br>");
    document.write("El nro minimo es "+minimo+" y la letra es "+letra+"</br>");
}
