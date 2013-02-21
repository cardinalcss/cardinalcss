// When the DOM is ready,
jQuery(document).ready(function($) {
	// Toggle baseline grid
	$(".baseline").hide();

	$(".baseline_toggle .btn").on("click", function() {
	    $("body").toggleClass("baseline_on");
	    $(".baseline").fadeToggle(200);
	});
});
