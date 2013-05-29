$(function() {
	// Fallback to .png logo if SVG is not supported
	if (!Modernizr.svg) {
		$(".logo img").each(function() {
			$(this).attr("src", $(this).data("src"));
		});
	}
});