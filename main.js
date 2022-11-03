Notification.requestPermission().then(perm=>{
    if(perm==='granted'){
        console.log("Se aceptó el permiso");
    }
});

$(document).ready(function(){
  
    $("#cuestionario").hide();
    $("#btnEnviar").hide();
    $("#btnEnviar2").hide();
    $("#btnEnviar3").hide();
    $("#btnEnviar4").hide();
    $("#empezar").click(function(){
        $("#cuestionario").show();
        $("#btnEnviar").show();
        $("#empezar").hide();
        $("#btnEnviar2").show();
        $("#btnEnviar3").show();
        $("#btnEnviar4").show();
    });

    $("#btnEnviar").click(function(){
        
        var puntuacion=0;
        if($('#p1r1').is(':checked')){
            puntuacion+=1;
        }
        if($('#p2r2').is(':checked')){
            puntuacion+=1;
        }
        if($('#p3r3').is(':checked')){
            puntuacion+=1;
        }
        if($('#p4r4').is(':checked')){
            puntuacion+=1;
        }
        if($('#p5r5').is(':checked')){
            puntuacion+=1;
        }
        if($('#p6r6').is(':checked')){
            puntuacion+=1;
        }
        if($('#p7r7').is(':checked')){
            puntuacion+=1;
        }
        if($('#p8r8').is(':checked')){
            puntuacion+=1;
        }
        if($('#p9r9').is(':checked')){
            puntuacion+=1;
        }
        if($('#p10r10').is(':checked')){
            puntuacion+=1;
        }
        if($('#p11r11').is(':checked')){
            puntuacion+=1;
        }
        if($('#p12r12').is(':checked')){
            puntuacion+=1;
        }
        if($('#p13r13').is(':checked')){
            puntuacion+=1;
        }
        if($('#p14r14').is(':checked')){
            puntuacion+=1;
        }
        if($('#p15r15').is(':checked')){
            puntuacion+=1;
        }
       alert(puntuacion+"/15");
       document.getElementById("resultado").innerHTML="Tu puntuación es "+puntuacion+"/15";
       new Notification("Resultado",{
        body: 'Tu puntuación es '+puntuacion+"/15",
        data:{hello: 'world'},
        icon: 'icono.png',
        vibrate: [100,100,100],
        onClick: function(){
            window.location="https://google.es"
        }
         });
    
    });
    $("#btnEnviar2").click(function(){

        var puntuacion=0;
        if($('#p1r1').is(':checked')){
            puntuacion+=1;
        }
        if($('#p2r2').is(':checked')){
            puntuacion+=1;
        }
        if($('#p3r3').is(':checked')){
            puntuacion+=1;
        }
        if($('#p4r4').is(':checked')){
            puntuacion+=1;
        }
        if($('#p5r5').is(':checked')){
            puntuacion+=1;
        }
        if($('#p6r6').is(':checked')){
            puntuacion+=1;
        }
        if($('#p7r7').is(':checked')){
            puntuacion+=1;
        }
        if($('#p8r8').is(':checked')){
            puntuacion+=1;
        }
        if($('#p9r9').is(':checked')){
            puntuacion+=1;
        }
        if($('#p10r10').is(':checked')){
            puntuacion+=1;
        }
        if($('#p11r11').is(':checked')){
            puntuacion+=1;
        }
        if($('#p12r12').is(':checked')){
            puntuacion+=1;
        }
        if($('#p13r13').is(':checked')){
            puntuacion+=1;
        }
       alert(puntuacion+"/13");
       document.getElementById("resultado").innerHTML="Tu puntuación es "+puntuacion+"/13";
    });
    


    //-----------------------------------------------------------------------------------------------------------
    //Validación evaluación 3
    $("#btnEnviar3").click(function(){

        var puntuacion=0;
        if($('#p1r1').is(':checked')){
            puntuacion+=1;
        }
        if($('#p2r2').is(':checked')){
            puntuacion+=1;
        }
        if($('#p3r3').is(':checked')){
            puntuacion+=1;
        }
        if($('#p4r4').is(':checked')){
            puntuacion+=1;
        }
        if($('#p5r5').is(':checked')){
            puntuacion+=1;
        }
        if($('#p6r6').is(':checked')){
            puntuacion+=1;
        }
        if($('#p7r7').is(':checked')){
            puntuacion+=1;
        }
        if($('#p8r8').is(':checked')){
            puntuacion+=1;
        }
        if($('#p9r9').is(':checked')){
            puntuacion+=1;
        }
        if($('#p10r10').is(':checked')){
            puntuacion+=1;
        }
        if($('#p11r11').is(':checked')){
            puntuacion+=1;
        }
        if($('#p12r12').is(':checked')){
            puntuacion+=1;
        }
        if($('#p13r13').is(':checked')){
            puntuacion+=1;
        }
       alert(puntuacion+"/10");
       document.getElementById("resultado").innerHTML="Tu puntuación es "+puntuacion+"/10";
    });
      //-----------------------------------------------------------------------------------------------------------
    //Validación evaluación 3
    $("#btnEnviar4").click(function(){

        var puntuacion=0;
        if($('#p1r1').is(':checked')){
            puntuacion+=1;
        }
        if($('#p2r2').is(':checked')){
            puntuacion+=1;
        }
        if($('#p3r3').is(':checked')){
            puntuacion+=1;
        }
        if($('#p4r4').is(':checked')){
            puntuacion+=1;
        }
        if($('#p5r5').is(':checked')){
            puntuacion+=1;
        }
        if($('#p6r6').is(':checked')){
            puntuacion+=1;
        }
        if($('#p7r7').is(':checked')){
            puntuacion+=1;
        }
        if($('#p8r8').is(':checked')){
            puntuacion+=1;
        }
        if($('#p9r9').is(':checked')){
            puntuacion+=1;
        }
        if($('#p10r10').is(':checked')){
            puntuacion+=1;
        }
        if($('#p11r11').is(':checked')){
            puntuacion+=1;
        }
        if($('#p12r12').is(':checked')){
            puntuacion+=1;
        }
        if($('#p13r13').is(':checked')){
            puntuacion+=1;
        }
       alert(puntuacion+"/13");
       document.getElementById("resultado").innerHTML="Tu puntuación es "+puntuacion+"/13";
    });
});
