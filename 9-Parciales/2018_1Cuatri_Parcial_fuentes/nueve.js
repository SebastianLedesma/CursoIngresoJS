function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta;
    var acumuladorPeso=0;
    var contador=0;
    var acumuladorTempPares=0;
    var marcaMasPesado;
    var cantMenorCero=0;
    var pesoMaximo;
    var pesoMinimo;
    var flag=0;
    var promedio;
    var pesoMaximoCongelado;

    do{
        marca = prompt("Ingrese la marca del producto:");

        peso= parseInt(prompt("Ingrese el peso del producto(1 y 100):"));
        while(peso < 1 || peso > 100 || isNaN(peso)){
            peso= parseInt(prompt("Debe ingresar un nro.Ingrese el peso del producto:"));
        }

        temperatura = parseInt(prompt("Ingrese la temperatura(-30 , 30):"));
        while(temperatura < -30 || temperatura > 30 || isNaN(temperatura)){
            temperatura = parseInt(prompt("Debe ingresar un nro.Ingrese la temperatura(-30 , 30):"));
        }

        //---------------cuento las temperaturas pares-----------------
        if (temperatura % 2 == 0) {
            acumuladorTempPares++;
        }

        if((flag == 0 || peso > pesoMaximoCongelado) && temperatura > 0){
            pesoMaximoCongelado = peso;
            marcaMasPesado = marca;
            flag = 1;
        }
        

        //-----------cuento las temperaturas menores a 0--------------
        if(temperatura < 0){
            cantMenorCero++;
        }

        //--------------acumulo y cuento los pesos ingresados----------------
        acumuladorPeso+= peso;


        // ------------ Maximos y Minimos -------------------
        if(contador == 0 || peso < pesoMinimo){
            pesoMinimo = peso;
        }

        if(contador == 0 || peso > pesoMaximo){
            pesoMaximo= peso;
        }

        contador++;//en lugar de usar otro flag para max y min uso el contador.
        
        //---------pregunto si quiere continuar-------------
        respuesta = promedio("Desea continuar?");
    }while(respuesta == 's');

    //--------------saco el promedio de 
    promedio = acumuladorPeso / contador;

    //-------------muestro los resultados-------------
    document.write("La cantidad de temperaturas pares es "+acumuladorTempPares+"</br>");
    document.write("La marca del producto mas pesado es "+marcaMasPesado+"</br>");
    document.write("La cantidad de productos menores a 0 grados es "+cantMenorCero+"</br>");
    document.write("EL promedio del peso es "+promedio+"</br>");
    document.write("El peso maximo es "+pesoMaximo+" y el minimo es"+pesoMinimo+"</br>");
}
