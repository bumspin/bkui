	
var doc = $(window),
	header = $(".header"),
	innerheader = $(".innerheader"),
	bodycontent = $(".bodycontent"),
	searchTakeover = $("#search-takeover"),
	searchClose = $("#search-takeover .close"),
	searchBookme = $(".searchbookme"),
	pageCntrl = $("#page-controls"),
	provAvatar = $(".provider-detail-avatar"),
	provID = $(".provider-identity"),
	provDetBody = $("#provider-detail-body"),
	pageControlUl = $("#page-controls ul"),
	navBtn = $(".nav-ryt-item a.btn-sec");

doc.scroll(function(){
	"use strict";
	var windowpos = doc.scrollTop(),
		windowWidth = doc.innerWidth();
	
		
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
	if(windowWidth >= 768){
		if(windowpos >= 372){
			pageCntrl.addClass("page-cntrl-fix");
			provAvatar.addClass("avatar-transform");
			provID.addClass("id-transform");
			provDetBody.addClass("detail-body-pad");
		} else {
			pageCntrl.removeClass("page-cntrl-fix");
			provAvatar.removeClass("avatar-transform");
			provID.removeClass("id-transform");
			provDetBody.removeClass("detail-body-pad");
		}	
	} else {
		if(windowpos >= 514){
			pageControlUl.addClass("fix-cntrl-ul");
			provDetBody.addClass("cntrl-body-pad");
		} else {
			pageControlUl.removeClass("fix-cntrl-ul");
			provDetBody.removeClass("cntrl-body-pad");
		}
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