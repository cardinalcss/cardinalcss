$(function()
	{
		/**
		 * Sidebar menu
		 */

		// Global variables
		var html_body = $("html, body"),
			page = $(".page"),
			menu = $(".menu"),
			menu_list = $(".menu ul"),
			menu_button = $(".menu-button"),
			menu_link = $(".menu a"),
			flag = false;

		// Prevent scrolling the entire page while scrolling inside the menu
		// http://cbrac.co/1bt2GJg
		menu.on('DOMMouseScroll mousewheel touchmove', function(e)
			{
				// Scroll variables
				var $this = $(this),
					scroll_top = this.scrollTop,
					scroll_height = this.scrollHeight,
					height = $this.height(),
					delta = (e.type == 'DOMMouseScroll' ?
						e.originalEvent.detail * -40 : /* Firefox */
						e.originalEvent.wheelDelta),   /* The rest */
					up = delta > 0;

				// Prevent the scroll event
				var prevent = function() {
					e.stopPropagation();
					e.preventDefault();
					e.returnValue = false;
					return false;
				}

				// Cancel the event if the scrollable area is at top or bottom
				if (!up && -delta > scroll_height - height - scroll_top) {
					$this.scrollTop(scroll_height);
					return prevent();
				} else if (up && delta > scroll_top) {
					$this.scrollTop(0);
					return prevent();
				}
			}
		);

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
