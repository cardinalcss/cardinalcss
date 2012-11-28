// When the DOM is ready,
jQuery(document).ready(function($) {
	// Toggle baseline grid
	$(".baseline").hide();

	$(".baseline__toggle .btn").on("click", function() {
	    $("body").toggleClass("baseline_on");
	    $(".baseline").fadeToggle(200);
	});
});
