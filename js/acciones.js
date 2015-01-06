// JavaScript Document
	$(document).ready(function(e){


    $('#logo img').tap(function(e){	
    $('#logo img').toggleClass('clicked');
	
});//click 

    $('#logo img').tap(function(e){	
	 $("#roar")[0].play();	
	 $.mobile.navigate( "#principal" );
	});
	
	$('#Denon').tap(function (e) {
 	 $.mobile.navigate( "#Denon" );
	});
	
	$('#Numark').tap(function (e) {
		$.mobile.navigate( "#Numark" );
});

		$('#Piooner').tap(function (e) {
		$.mobile.navigate( "#Piooner" );
		});
		
		$('#acercade').tap(function (e) {
		$.mobile.navigate( "#acercade" );
		});
		
		
		$('#peavey').tap(function (e) {
		$.mobile.navigate( "#peavey" );
		
		});
		
	document.addEventListener("deviceready",function(){



  $('.boton').tap(function(){
    navigator.notification.vibrate(500);//milisegundos
	
  });	
		
		
	 },false); //deviceready

	});//ready