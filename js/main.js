jQuery(document).ready(function($) {
	// Toggle baseline grid
	$(".bl-grid").hide();
	$(".bl-grid-toggle .btn").on("click", function() {
	    $("body").toggleClass("bl-grid-on");
	    $(".bl-grid").toggle();
	});

	// Equal height columns
	$(".grid-col").equalHeightColumns();
});

// Re-calculate column heights on resize
$(window).smartresize(function() {
	$(".grid-col").css("height", "auto");
    $(".grid-col").equalHeightColumns();
});
