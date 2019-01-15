/*
	jstrongpass.JS
	V. 1.0.0
	José Javier Fernández Mendoza 2019
	Require jquery
	Añade un borde o fondo a cada elemento de tipo password para poner la fuerza de la clave
	Añade el codigo necesario css en el head 
	
	Basado en https://www.formget.com/password-strength-checker-in-jquery/
	Usa una variable para indicar si pone borde o background (jSPbackgroundcolorStrong)
	Usa una variable para indicar si lo hace automaticamente con todos los elementos de tipo password
	Para llamarlo manualmente añadir la linea despues de incluir jquery y este fichero
	$('elemento').jStrongPass();
	
*/
var jSPbackgroundcolorStrong=false;
var jSPautoPassword=true;
function jSPcheckStrength(password) {
	var strength = 0
	if (password.length < 6) {
		return 1
	}
	if (password.length > 7) strength += 1
	// If password contains both lower and uppercase characters, increase strength value.
	if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
	// If it has numbers and characters, increase strength value.
	if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
	// If it has one special character, increase strength value.
	if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
	// If it has two special characters, increase strength value.
	if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
	// Calculated strength value, we can return messages
	// If value is less than 2
	if (strength < 2) {
		return 2
	} else if (strength == 2) {
		return 3
	} else {
		return 4
	}
}
(function($) {
  'use strict';

  $.fn.jStrongPass = function() {

    return this.each(function(i, element) {
		$(element).change(function updateCharCounter() {

			var $me = $(this);
			var pwd=$me.val();
			switch(jSPcheckStrength(pwd)){
				case 1:
					$me.removeClass("jSPdebil");
					$me.removeClass("jSPnormal");
					$me.removeClass("jSPfuerte");
					break;
				case 2:
					$me.addClass("jSPdebil");
					$me.removeClass("jSPnormal");
					$me.removeClass("jSPfuerte");
					break;
				case 3: 
					$me.removeClass("jSPdebil");
					$me.addClass("jSPnormal");
					$me.removeClass("jSPfuerte");
					break;
				case 4:
					$me.removeClass("jSPdebil");
					$me.removeClass("jSPnormal");
					$me.addClass("jSPfuerte");
					break;
					
			}
			
		});
	   
        var $me = $(this);
			var pwd=$me.val();
			switch(jSPcheckStrength(pwd)){
				case 1:
					$me.removeClass("jSPdebil");
					$me.removeClass("jSPnormal");
					$me.removeClass("jSPfuerte");
					break;
				case 2:
					$me.addClass("jSPdebil");
					$me.removeClass("jSPnormal");
					$me.removeClass("jSPfuerte");
					break;
				case 3: 
					$me.removeClass("jSPdebil");
					$me.addClass("jSPnormal");
					$me.removeClass("jSPfuerte");
					break;
				case 4:
					$me.removeClass("jSPdebil");
					$me.removeClass("jSPnormal");
					$me.addClass("jSPfuerte");
					break;
					
			}
     
    });
  };
  /* añade css para las cajas de manera automatica */
  if (jSPbackgroundcolorStrong){
	$( "<style>.jSPdebil {  background-color: #f36767 !important;}</style>" ).appendTo( "head" )
	$( "<style>.jSPnormal{  background-color: #efde6d !important;}</style>" ).appendTo( "head" )
	$( "<style>.jSPfuerte{  background-color: #99d899 !important;}</style>" ).appendTo( "head" )
  }else{
	$( "<style>.jSPdebil {  border-bottom:2px solid #f36767 !important;}</style>" ).appendTo( "head" )
	$( "<style>.jSPnormal{  border-bottom:2px solid #efde6d !important;}</style>" ).appendTo( "head" )
	$( "<style>.jSPfuerte{  border-bottom:2px solid #99d899 !important;}</style>" ).appendTo( "head" )
  }
  
}(jQuery));
$( document ).ready(function() {
	if (jSPautoPassword){
		$('input[type=password]').jStrongPass();
	}
});