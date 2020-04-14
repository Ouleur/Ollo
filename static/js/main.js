

(function ($) {
 "use strict";

		
		/*--------------------------
		 auto-size Active Class
		---------------------------- */	
		$(".auto-size")[0] && autosize($(".auto-size"));
		/*--------------------------
		 Collapse Accordion Active Class
		---------------------------- */	
		$(".collapse")[0] && ($(".collapse").on("show.bs.collapse", function(e) {
            $(this).closest(".panel").find(".panel-heading").addClass("active")
        }), $(".collapse").on("hide.bs.collapse", function(e) {
            $(this).closest(".panel").find(".panel-heading").removeClass("active")
        }), $(".collapse.in").each(function() {
            $(this).closest(".panel").find(".panel-heading").addClass("active")
        }));
		/*----------------------------
		 jQuery tooltip
		------------------------------ */
		$('[data-toggle="tooltip"]').tooltip();
		/*--------------------------
		 popover
		---------------------------- */	
		$('[data-toggle="popover"]')[0] && $('[data-toggle="popover"]').popover();
		/*--------------------------
		 File Download
		---------------------------- */	
		$('.btn.dw-al-ft').on('click', function(e) {
			e.preventDefault();
		});
		/*--------------------------
		 Sidebar Left
		---------------------------- */	
		$('#sidebarCollapse').on('click', function () {
			 $('#sidebar').toggleClass('active');
			 
		 });
		$('#sidebarCollapse').on('click', function () {
			$("body").toggleClass("mini-navbar");
			SmoothlyMenu();
		});
		$('.menu-switcher-pro').on('click', function () {
			var button = $(this).find('i.nk-indicator');
			button.toggleClass('notika-menu-befores').toggleClass('notika-menu-after');
			
		});
		$('.menu-switcher-pro.fullscreenbtn').on('click', function () {
			var button = $(this).find('i.nk-indicator');
			button.toggleClass('notika-back').toggleClass('notika-next-pro');
		});
		/*--------------------------
		 Button BTN Left
		---------------------------- */	
		
		$(".nk-int-st")[0] && ($("body").on("focus", ".nk-int-st .form-control", function() {
            $(this).closest(".nk-int-st").addClass("nk-toggled")
        }), $("body").on("blur", ".form-control", function() {
            var p = $(this).closest(".form-group, .input-group"),
                i = p.find(".form-control").val();
            p.hasClass("fg-float") ? 0 == i.length && $(this).closest(".nk-int-st").removeClass("nk-toggled") : $(this).closest(".nk-int-st").removeClass("nk-toggled")
        })), $(".fg-float")[0] && $(".fg-float .form-control").each(function() {
            var i = $(this).val();
            0 == !i.length && $(this).closest(".nk-int-st").addClass("nk-toggled")
        });
		/*--------------------------
		 mCustomScrollbar
		---------------------------- */	
		$(window).on("load",function(){
			$(".widgets-chat-scrollbar").mCustomScrollbar({
				setHeight:460,
				autoHideScrollbar: true,
				scrollbarPosition: "outside",
				theme:"light-1"
			});
			$(".notika-todo-scrollbar").mCustomScrollbar({
				setHeight:445,
				autoHideScrollbar: true,
				scrollbarPosition: "outside",
				theme:"light-1"
			});
			$(".comment-scrollbar").mCustomScrollbar({
				autoHideScrollbar: true,
				scrollbarPosition: "outside",
				theme:"light-1"
			});
		});
	/*----------------------------
	 jQuery MeanMenu
	------------------------------ */
	jQuery('nav#dropdown').meanmenu();
	
	/*----------------------------
	 wow js active
	------------------------------ */
	 new WOW().init();
	 
	/*----------------------------
	 owl active
	------------------------------ */  
	$("#owl-demo").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
	});

	/*----------------------------
	 price-slider active
	------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - £" + $( "#slider-range" ).slider( "values", 1 ) );  
	   
	/*--------------------------
	 scrollUp
	---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
	
	
 
})(jQuery); 


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


if(getUrlVars()["p"]!=undefined){
	$(".tab-pane").removeClass("active");
	$(".nav>li").removeClass("active");
	$("#"+getUrlVars()["p"]).addClass("active");
	if(getUrlVars()["p"]=="etudiant" || getUrlVars()["p"]=="filiere" || getUrlVars()["p"]=="matiere"){
		$(".configuration").addClass("active");
	}
}

$("a[data-toggle='tab']").on("click",function(){
	$(".nav>li").removeClass("active");
	$("."+$(this).attr("href").replace("#","")).addClass("active");
	var func_name = $(this).attr("href").replace("#","");
	func_name(url,"get");
})




$(".seesion_play").on("click",function(event){
	console.log("Start conf session");
	event.preventDefault();
	window.location.replace("http://127.0.0.1/conference/?session="+$(this).data("session"));
});

var form="";

$(".btn-login").click(function(){
	form=$("#sign_in").serializeArray();

	$("#sign_in").submit(); 
	alert()
});

$("#sign_in").submit(function(event){
	event.preventDefault();

	$.ajax({
		url:'api.php',
		"method":"POST",
		"async":true,
		type:"POST",
		data:form,
		"crossDomain":true})
	.done(function(data){
		console.log(data)
		window.location.replace(data);
	});

	$("input[name='nom']").val("");
	$("input[name='prenoms']").val("");
	$("input[name='contact']").val("");
	$("input[name='date_naiss']").val("");
	$("input[name='adresse']").val("");
	$(".spinner").hide();
	return;
})


function getConfIten(data){
	
	conf_item = '<div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 conf_card">';
	conf_item += '<div class="wb-traffic-inner notika-shadow  dk-res-mg-t-30">';
	conf_item += '<div class="conf_info col-lg-11" style="overflow-x: scroll;overflow-y: hidden;white-space: nowrap;">';
	conf_item += '<h4 ><span class="">'+data.session_title+'</span></h4>';
	conf_item += '<p>Session: <span>'+data.session_id+'</span></p>';
	conf_item += '</div>';
	conf_item += '<div class="action-btn col-lg-1">';
	conf_item += '<a href="" class="gen_key" data-toggle="modal" data-target="#myModalthree" data-session="'+data.session_id+'">';
	conf_item += '<svg  viewBox="0 0 580 580"  xmlns="http://www.w3.org/2000/svg">';
	conf_item += '<path  class="key-btn__svg" d="M506.478,165.937c-10.68-27.194-30.264-66.431-62.915-98.927c-32.535-32.384-71.356-51.408-98.194-61.666';
	conf_item += 'c-29.464-11.261-62.945-4.163-85.295,18.082l-78.538,78.17c-23.281,23.171-29.991,58.825-16.698,88.72';
	conf_item += 'c4.122,9.272,8.605,18.341,13.395,27.103L5.858,389.793C2.107,393.544,0,398.631,0,403.936v88c0,11.046,8.954,20,20,20h88';
	conf_item += 'c11.046,0,20-8.954,20-20v-36l36-0.001c11.046,0,20-8.954,20-20v-35.999h36c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20h-56';
	conf_item += 'c-11.046,0-20,8.954-20,20v35.999l-36,0.001c-11.046,0-20,8.954-20,20v36H40V412.22l177.355-177.354';
	conf_item += 'c6.516-6.516,7.737-16.639,2.958-24.517c-6.931-11.424-13.298-23.632-18.923-36.285c-6.599-14.841-3.237-32.57,8.366-44.119';
	conf_item += 'l78.537-78.169c11.213-11.159,28.011-14.718,42.798-9.068c23.222,8.876,56.69,25.214,84.256,52.652';
	conf_item += 'c27.735,27.604,44.62,61.567,53.9,85.197c5.791,14.748,2.272,31.503-8.965,42.687l-79.486,79.114';
	conf_item += 'c-11.575,11.519-28.851,14.887-44.016,8.58c-12.507-5.202-24.62-11.382-36-18.367c-9.413-5.778-21.729-2.83-27.507,6.584';
	conf_item += 'c-5.778,9.414-2.831,21.73,6.583,27.508c13.152,8.072,27.136,15.207,41.562,21.207c30.142,12.539,64.525,5.8,87.595-17.161';
	conf_item += 'l79.486-79.113C511.044,229.157,518.101,195.534,506.478,165.937z"/>';
	conf_item += '</svg>';
	conf_item += '</a>';
	conf_item += '<a href="" class="seesion_play " data-session="'+data.session_id+'">';
	conf_item += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">';
	conf_item += ' <polygon class="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>';
	conf_item += '<path class="play-btn__svg" d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"/>';
	conf_item += '</svg> ';
	conf_item += '</a>';
	conf_item += '</div>';
	conf_item += '</div>';
	conf_item += '</div>';


	return conf_item;
}


$.ajax({
	url:'api.php',
	"method":"POST",
	"async":true,
	type:"POST",
	data:{"sessions":"ok"},
	"crossDomain":true})
.done(function(data){
	data = JSON.parse(data);
	for (let index = 0; index < data.length; index++) {
		$('#session_list').html(getConfIten(data[index])+$('#session_list').html())
	}
});

