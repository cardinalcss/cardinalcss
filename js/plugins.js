/**
 * Avoid `console` errors in browsers that lack a console.
 */

(function() {
<<<<<<< HEAD
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

=======
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


>>>>>>> docs-2.0.0
/**
 * Grab the latest version tag from GitHub and append it
 */

function updateVersion() {

<<<<<<< HEAD
	$.ajax({
		url: "https://api.github.com/repos/cbracco/cardinal/tags",
		dataType: "jsonp",
		timeout: 60 * 1000,
		success: function(results) {
			var tag = results.data;
			$(".version").each(function() {
				$(this).append("&nbsp;<span class=\"version\">" + tag[0]["name"] + "</span>");
			});
		}
	});
=======
    $.ajax({
        url: "https://api.github.com/repos/cbracco/cardinal/tags",
        dataType: "jsonp",
        timeout: 60 * 1000,
        success: function(results) {
            var tag = results.data;
            $(".version").each(function() {
                $(this).append("&nbsp;<span class=\"version\">" + tag[0]["name"] + "</span>");
            });
        }
    });
>>>>>>> docs-2.0.0

}
