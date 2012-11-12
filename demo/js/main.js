jQuery(document).ready(function($) {
	// Toggle baseline grid
	$(".bl-grid-toggle .btn").on("click", function() {
	    $("body").toggleClass("bl-grid-on");
	    $(".bl-grid").toggle();
	});
});