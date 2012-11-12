// Align non-textual elements to baseline grid
$(window).bind("load", function() {
	$("audio, embed, iframe, img, object, video").baselineAlign();
});

jQuery(document).ready(function($) {
	// Toggle baseline grid
	$(".bl-grid-toggle .btn").on("click", function() {
	    $("body").toggleClass("bl-grid-on");
	    $(".bl-grid").toggle();
	});
});
