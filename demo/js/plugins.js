/**
 * Avoid `console` errors in browsers that lack a console.
 */

(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*
 * Baseline.js 1.0
 * jQuery plugin
 * @author Daniel Eden
 * @source http://cbrac.co/ZvVGHE
 */

(function($) {
    $.fn.baseline = function(breakpoints) {
        // Set up our variables, like a good little developer
        var tall, newHeight, base, old = 0;

        return this.each(function(){
            var $this = $(this); // Set the images as objects

            var setbase = function(breakpoints) { // The fun starts here
                // Check if a single value or multiple breakpoints are given
                        if (typeof breakpoints === 'number') {
                            base = breakpoints;
                        } else if (typeof breakpoints === 'object') {
                            // Loop through the breakpoints and check which baseline to apply
                            for (key in breakpoints) {
                                var current = parseInt(key);
                                if (document.width > current && current >= old) {
                                    base = breakpoints[key];
                                    old = current;
                                }
                            }
                        }

                $this.css('maxHeight', 'none'); // Remove old max-height so that we can resize up as well as down
                tall = $this.height(); // Grab the height
                newHeight = Math.floor(tall / base) * base; // Make up a new height based on the baseline
                $this.css('maxHeight', newHeight); // Set it!
            }

            setbase(breakpoints); // Call on load

            $(window).resize(function(){ // And call again on resize.
                setbase(breakpoints);
            });
        });
    }
}) (jQuery);

// Place your extra jQuery/helper plugins here
