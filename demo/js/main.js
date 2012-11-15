// When the DOM is ready,
jQuery(document).ready(function($) {
	// Toggle baseline grid
	$(".bl-grid").hide();
	$(".bl-grid-toggle .btn").on("click", function() {
	    $("body").toggleClass("bl-grid-on");
	    $(".bl-grid").fadeToggle(200);
	});
});