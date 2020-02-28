function mostrar()
{

    var numero;
    var flag=true;

    do{
        numero= parseInt(prompt("Ingrese un numero:"));
    }while(isNaN(numero));

    for(var i=2; i < numero; i++){
        if(numero % i == 0){
            flag = false;
            break;
        }
    }

    if(flag == true){
        document.write("El "+ numero+" es primo");
    }else{
        document.write("El "+ numero+" no es primo.")
    }

}//FIN DE LA FUNCIÓN