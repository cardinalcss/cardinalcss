$(function() {
	// Menu button toggle
	$(".menu-button").on("click", function() {
		$(".page").toggleClass("active");
		$(".menu").toggleClass("active");
	});

	// Current state & scroll animation for menu items
	var menu = $(".menu ul");
	var menu_link = $(".menu a");

	menu_link.on("click", function(e) {
		// Prevent the default event
		e.preventDefault();

		// Animate to the corresponding section
		$('html, body').animate({ scrollTop: $(this.hash).offset().top }, 500);

		// Remove the “active” class from other parent items
		menu.children().removeClass();

		// Add the class to current item’s parent
		$(this).parent().addClass("current");
	});
});
