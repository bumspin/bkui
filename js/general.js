	
var doc = $(window),
	header = $(".header"),
	innerheader = $(".innerheader"),
	bodycontent = $(".bodycontent"),
	searchTakeover = $("#search-takeover"),
	searchClose = $("#search-takeover .close"),
	searchBookme = $(".searchbookme"),
	navBtn = $(".nav-ryt-item a.btn-sec");

doc.scroll(function(){
	"use strict";
	var windowpos = doc.scrollTop();
	
		
	if(windowpos >= 50){
		header.addClass("header-bg-second");
		header.removeClass("header-bg-first");
		navBtn.addClass("slide-btn");
		innerheader.addClass("innerheader-pos");
		bodycontent.addClass("bc-pad");
	}
	else{
		header.addClass("header-bg-first");
		header.removeClass("header-bg-second");
		navBtn.removeClass("slide-btn");
		innerheader.removeClass("innerheader-pos");
		bodycontent.removeClass("bc-pad");
	}
});

searchBookme.on('click', function(){
	"use strict";
	searchTakeover.removeClass("hide-search");
});

searchClose.on('click', function(){
	"use strict";
	searchTakeover.addClass("hide-search");
});