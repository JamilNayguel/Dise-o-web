function mostrarfecha()
{
    var fecha = new Date();
        var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

        var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

        var dia_s = semana[fecha.getDay()];

        var dia = fecha.getDate();

        var mes = meses[fecha.getMonth()];

        var anio = fecha.getFullYear();


        document.write(' '+dia_s+' '+dia+' de '+mes+' de '+anio);
}