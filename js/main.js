/**
 * Cache some selectors
 */

var flag         = false,
	body         = $("html, body"),
	last_id,
	menu         = $(".menu"),
	menu_button  = $(".menu-button"),
	menu_items   = menu.find("a"),
	scroll_items = menu_items.map(function() {
		var item = $($(this).attr("href"));
		if (item.length) { return item; }
	});

/**
 * Add an event listener for `touchstart` to the page so that buttons
 * feel quick after removing their default tap highlight color with CSS
 */

document.addEventListener("touchstart", function(){}, true);

/**
 * Prevent scrolling the entire page when scrolling inside the menu
 */

menu.on("DOMMouseScroll mousewheel", function(e) {
	// Scroll variables
	var $this = $(this),
		scroll_top = this.scrollTop,
		scroll_height = this.scrollHeight,
		height = $this.height(),
		delta = (e.type == "DOMMouseScroll" ?
			e.originalEvent.detail * -40 : // Firefox
			e.originalEvent.wheelDelta),   // The rest
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
});

/**
 * Set a flag on drag
 */

menu_items.on("touchmove", function() { flag = true; });

/**
 * Move to appropriate content section on tap / click
 */

menu_items.on("touchend click", function(e) {
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
			body.scrollTop($(this.hash).offset().top + 1);

			// Set e.handled to true
			e.handled = true;
		} else {
			return false;
		}
	}
});

/**
 * Menu button toggle
 */

menu_button.on("touchstart click", function(e) {
	// Prevent the default event
	e.stopPropagation();
	e.preventDefault();

	if(e.handled !== true) {
		body.toggleClass("menu_open");

		// Set e.handled to true
		e.handled = true;
	} else {
		return false;
	}
});

/**
 * Click or tap anywhere except the menu to close the menu
 */

body.on("touchstart click", function(e) {
	var target = e.target;

	if(!$(target).is(menu) && !$(target).parents().is(menu)) {
		body.removeClass("menu_open");
	}
});

/**
 * Minimalist scrollspy for menu
 */

$(window).scroll(function() {
	// Get container scroll position
	var from_top = $(this).scrollTop();

	// Get ID of the current scroll item
	var cur = scroll_items.map(function() {
		if($(this).offset().top < from_top)
			return this;
	});

	// Get ID of the current element
	cur = cur[cur.length - 1];
	var id = cur && cur.length ? cur[0].id : "";

	if(last_id !== id) {
		last_id = id;

		// Remove and set the `.current` class
		menu_items
			.parent().removeClass("current")
			.end().filter("[href=#" + id + "]").parent().addClass("current");
	}
});

/**
 * When the DOM is ready,
 */

$(function() {
	// Set GA event tracking for click actions
	$("#masthead-download").on("click", function() {
		ga("send", "event", "Header actions", "click", "Download");
	});

	$("#masthead-github_repo").on("click", function() {
		ga("send", "event", "Header actions", "click", "GitHub Repo");
	});

	$("#masthead-pivotal").on("click", function() {
		ga("send", "event", "Header actions", "click", "Pivotal Tracker");
	});

	$("#masthead-changelog").on("click", function() {
		ga("send", "event", "Header actions", "click", "Changelog");
	});

	$("#footer-download").on("click", function() {
		ga("send", "event", "Footer actions", "click", "Download");
	});

	$("#footer-github_repo").on("click", function() {
		ga("send", "event", "Footer actions", "click", "GitHub Repo");
	});

	$("#footer-cbracco").on("click", function() {
		ga("send", "event", "Footer actions", "click", "cbracco.me");
	});

	// Request the latest version number from GitHub once a minute
	setInterval(updateVersion(), 60 * 1000);
});
