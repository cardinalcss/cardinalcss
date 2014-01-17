// When the DOM is ready,
$(function() {

    /**
     * Cache some selectors
     */

    var flag          = false,
        body          = $('html, body'),
        nav           = $('.nav'),
        nav_button    = $('.nav-button'),
        nav_container = $('.nav-container');

    /**
     * Add an event listener for `touchstart` to the page so that buttons
     * feel quick after removing their default tap highlight color with CSS
     */

    document.addEventListener("touchstart", function(){}, true);

    /**
     * Nav button toggle
     */

    nav_button.on("touchstart click", function(e) {
        // Prevent the default event
        e.stopPropagation();
        e.preventDefault();

        if(e.handled !== true) {
            body.toggleClass("nav-open");

            // Set e.handled to true
            e.handled = true;
        } else {
            return false;
        }
    });

    /**
     * Prevent scrolling the entire page when scrolling inside the nav
     */

    nav_container.on("DOMMouseScroll mousewheel", function(e) {
        // Scroll variables
        var $this         = $(this),
            scroll_top    = this.scrollTop,
            scroll_height = this.scrollHeight,
            height        = $this.height(),
            delta         = (e.type == "DOMMouseScroll" ?
                             e.originalEvent.detail * -40 : // Firefox
                             e.originalEvent.wheelDelta),   // The rest
            up            = delta > 0;

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
     * Google Analytics event click tracking
     */

    $("#header-download").on("click", function() {
        ga("send", "event", "Header actions", "click", "Download");
    });

    $("#header-view").on("click", function() {
        ga("send", "event", "Header actions", "click", "GitHub Repo");
    });

    $("#header-pivotal").on("click", function() {
        ga("send", "event", "Header actions", "click", "Pivotal Tracker");
    });

    $("#header-changelog").on("click", function() {
        ga("send", "event", "Header actions", "click", "Changelog");
    });

    $("#footer-download").on("click", function() {
        ga("send", "event", "Footer actions", "click", "Download");
    });

    $("#footer-view").on("click", function() {
        ga("send", "event", "Footer actions", "click", "GitHub Repo");
    });

    $("#footer-cbracco").on("click", function() {
        ga("send", "event", "Footer actions", "click", "cbracco.me");
    });

    /**
     * Request the latest version number from GitHub once a minute
     */

    setInterval(updateVersion(), 60 * 1000);

});
