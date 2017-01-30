(function(){
	
	function init(){

		playAnimation();

	}

	function playGender() {

		$("#home").fadeOut();
		$("#gender").fadeIn(200, function() {
			
			setTimeout(function() { 
		       $("#gender").find(".board").show();
		     }, 300);

			$("#gender").find('.item').css("animation-play-state", "running");
		});			

	}

	function playAgeGirl() {

		$("#gender").fadeOut();
		$("#age").fadeIn(200, function() {

			setTimeout(function() { 
		       $("#age").find(".board").show();
		     }, 300);

			$("#age").find('.item').css("animation-play-state", "running");
		});			

	}

	function playAnimation() {

		$(".board").hide();
		$(".item").css("animation-play-state", "paused");

		$("#start").click(function(e) {
			e.preventDefault();
			playGender();		
		});

		$("#girl").click(function(e) {
			e.preventDefault();
			playAgeGirl();		
		});


	}
	
	
	init();
	
}());