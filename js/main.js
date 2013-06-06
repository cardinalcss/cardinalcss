$(function() {
	/**
	 * Menu button toggle
	 */
	var menu_button = $(".menu-button");

	$(".menu-button").on("touchstart click", function(e) {
		// Prevent the default event
		e.stopPropagation();
		e.preventDefault();

		var page = $(".page");

		if(e.handled !== true) {
			page.toggleClass("menu_open");

			// Set e.handled to true
			e.handled = true;
		} else {
			return false;
		}
	});

	/**
	 * Current state & scroll animation for menu items
	 */
	var menu = $(".menu ul");
	var menu_link = $(".menu a");

	menu_link.on("touchstart click", function(e) {
		// Prevent the default event
		e.stopPropagation();
		e.preventDefault();

		if(e.handled !== true) {
			// Animate to the corresponding section
			$('html, body').animate({ scrollTop: $(this.hash).offset().top }, 500);

			// Remove the “active” class from other parent items
			menu.children().removeClass();

			// Add the class to current item’s parent
			$(this).parent().addClass("current");

			// Set e.handled to true
			e.handled = true;
		} else {
			return false;
		}
	});

	/**
	 * Back to top button
	 */
	var btn_top = $(".btn_top");

	btn_top.on("touchstart click", function(e){
		// Prevent the default event
		e.stopPropagation();
		e.preventDefault();

		if(e.handled !== true) {
			// Animate to the corresponding section
			$('html, body').animate({ scrollTop: $(this.hash).offset().top }, 500);

			// Set e.handled to true
			e.handled = true;
		} else {
			return false;
		}
	});
});
