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


// //
// Place your Javascript code, plugins, etc here
// //

function updateVersion() {
	$.ajax(
		{
			url: "https://api.github.com/repos/cbracco/cardinal/tags",
			dataType: "jsonp",
			timeout: 60 * 1000,
			success: function(results) {
				var tag = results.data;
				$(".version").append("&nbsp;<span class=\"version\">" + tag[0]["name"] + "</span>");
			}
		}
	);
}
