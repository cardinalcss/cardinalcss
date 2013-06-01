$(function() {
	// Menu button toggle
	$(".menu-button").on("click", function() {
		$(".page").toggleClass("active");
		$(".menu").toggleClass("active");
	});

	// Fallback to .png logo if SVG is not supported
	if (!Modernizr.svg) {
		$(".birdy").each(function() {
			$(this).attr("src", $(this).data("src"));
		});
	}
});
