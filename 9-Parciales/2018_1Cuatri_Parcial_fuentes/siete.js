function mostrar()
{
    var nota;
    var sexo;
    var sexoNotaMasBaja;
    var promedio;
    var notaMinima;
    var flag=0;
    var cantidadVarones=0;
    var acumuladorNotas=0;

    for(var i = 0; i < 5; i++){
        nota= parseInt(prompt("Ingrese una nota entre 0 y 10:"));
        while(nota < 0 || nota > 10 || isNaN(nota)){
            nota= parseInt(prompt("Debe ingresar una nota valida.Ingrese nota:"));
        }

        sexo=prompt("Ingrese el sexo del alumno(f-m):");
        while(sexo != 'f' && sexo != 'm'){
            sexo=prompt("Sexo invalido.Ingrese sexo(f-m):");
        }

        acumuladorNotas+=nota;

        if(nota < notaMinima || flag==0){
            notaMinima=nota;
            sexoNotaMasBaja=sexo;
            flag=1;
        }

        if(sexo == 'm' && nota >= 6){
            cantidadVarones++;
        }
    }

    promedio= acumuladorNotas / 5;

    document.write("Promedio de notas:"+promedio+"</br>");
    document.write("Nota más baja:"+nota+"  Sexo del alumno:"+sexoNotaMasBaja+"</br>");
    document.write("Varones con nota mayor o igual a 6:"+cantidadVarones);


}
