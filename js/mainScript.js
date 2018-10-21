"use strict";

$(function(){

	var $width = $('body').outerWidth() < 611 ? 1 : 0; // <== THIS IS FOR MEDIA QUERY
	var content = $('#content');
	//Load banner (home page) back when click on the logo
	$('.logo').on('click',function(){
		content.slideUp(700, function(){
			//use html() to avoid #content's styles to be erased
			content.html(content.load('./articles/banner.html', function(){

					//if it is opened  close it
					if($width) $('.navigation').slideUp(700);

					content.slideDown(700);
			}));
		});
	});
	
	//This script for menu togglimg (for phone and tablets)
	$('.toggle-button').click(function(){
		$('.navigation').slideToggle(700);
	});

	//This one for dynamic changing on the page due to 
	//loading files the anchors refer to
	$('.navigation a').on('click',function(event){
		
		event.preventDefault();
		var address = "./articles/" + $(this).attr('href') + ".html"; //get a path to the file,
		var content = $('#content');    	// for ex. <a href="./articles/films.html">

		content.slideUp(700, function(){

			//use html() to avoid #content's styles to be erased
			content.html(content.load(address, function(){

				if($width) $('.navigation').slideToggle(700);

				content.slideDown(700);
			}));
		});
	});
	//If I ckick the banner it self I will load a aboutFestival.html page
	$('.banner').on('click',function(event){
		
		event.preventDefault();

		var content = $('#content');

		$('#content').slideUp(700, function(){
			//use html() to avoid #content's styles to be erased
			content.html(content.load('./articles/aboutFestival.html', function(){

					//if it is opened  close it
					if($width) $('.navigation').slideUp(700);

					content.slideDown(700);
			}));
		});
	}); 
});


