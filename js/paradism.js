;(function($){
	var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			$(this).toggleClass("isActiveNav");
			var navPos = parseInt($(".topNav").css("right"));

			if(navPos == -320){
				$(".topNav").stop(true, true).animate({
					right:0
				}, 300);

			}
			else{
				$(".topNav").stop(true, true).animate({
					right:-320
				}, 300);
			}
		});
	}


	$(function(){
		mobileNav();
	});

})(jQuery);




