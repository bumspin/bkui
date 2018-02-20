	
var burger = $(".db-user-r"),
	userOptns = $(".user-optns"),
	x = 0;

burger.on('click', function(){
	"use strict";
	if(x === 0){
		userOptns.addClass("hide-optn");
		x = 1;
	}else {
		userOptns.removeClass("hide-optn");
		x = 0;
	}
});
