$(function()
	{
		/**
		 * Sidebar menu
		 */

		// Set variables
		var html_body = $("html, body"),
			page = $(".page"),
			menu = $(".menu"),
			menu_list = $(".menu ul"),
			menu_button = $(".menu-button"),
			menu_link = $(".menu a"),
			flag = false;

		// Set a flag on drag
		menu_link.on("touchmove", function() { flag = true; });

		// Move to appropriate content section on tap / click
		menu_link.on("touchend click", function(e)
			{
				// Prevent the default event
				e.stopPropagation();
				e.preventDefault();

				// If it was a drag, do nothing, and reset the flag
				if(flag) {
					flag = false;
					return;
				} else {
					if(e.handled !== true) {
						// Navigate to the corresponding section
						html_body.scrollTop($(this.hash).offset().top);

						// Remove the “active” class from other parent items
						menu_list.children().removeClass();

						// Add the class to current item’s parent
						$(this).parent().addClass("current");

						// Set e.handled to true
						e.handled = true;
					} else {
						return false;
					}
				}
			}
		);

		/**
		 * Sidebar menu button toggle
		 */

		menu_button.on("touchstart click", function(e)
			{
				// Prevent the default event
				e.stopPropagation();
				e.preventDefault();

				if(e.handled !== true) {
					page.toggleClass("menu_open");

					// Set e.handled to true
					e.handled = true;
				} else {
					return false;
				}
			}
		);
	}
);
