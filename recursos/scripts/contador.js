var a = 45646456;

//var  texto = document.getElementById("prueba-contador")


var boton = function() {
    a = a-1;
    $("#prueba-contador").text(a);
}

var boton2 = () => {
    a = a-2;
    $("#prueba-contador").text(a);
}

$("#botonTexto").click(() => {
    
    a = a-1;
    $("#prueba-contador").text(a);
})


let contador = 0
var fuentes = ["Helvetica","Arial" ,"Arial Black" ,"Verdana" ,"Tahoma" ,"Trebuchet MS" ,"Impact" ,"Gill Sans" ,"Times New Roman","Georgia","Palatino" ,"Baskerville" ,"Andalé Mono","Courier","Lucida","Monaco","Bradley Hand","Brush Script MT" ,"Luminari","Comic Sans MS" ]

$('#cambiaFuentes').click(() => {
    
    $('#pruebas').css("font-family",fuentes[contador]);
    $("#nombreFuente").text(fuentes[contador]);
    if( contador === fuentes.length){
        contador = 0;
    }else{
        contador = contador +1 ;
    }


})



