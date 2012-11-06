jQuery(document).ready(function($) {

	// Toggle baseline grid
	$(".baseline").hide();

	$(".btn-baseline button").on("click", function() {
	    $(".baseline").toggle();
	});

	// Equal height columns
	$(".grid-col").equalHeightColumns();
});

// Re-calculate column heights on resize
$(window).smartresize(function() {
	$(".grid-col").css("height", "auto");
    $(".grid-col").equalHeightColumns();
});
