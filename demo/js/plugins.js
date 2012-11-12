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

/**
 * Baseline Align
 * jQuery plugin
 * @author Matt Wilcox
 * @source http://cbrac.co/ZqmFEi
 */

(function(a){var b={baselineAlign:function(b){var c=a.extend({container:false},b);return this.each(function(){var b=a(this);if(b.css("display")==="inline"){return}b.attr("style","");var d=Math.floor(b.height());if(b.is("img")){b.css("height",d)}var e=parseFloat(a("body").css("line-height").replace("px",""));var f=d;if(b.is("img")){if(c.container!==false&&b.parents(c.container).length>0){var g=b.parents(c.container);g.attr("style","");var h=Math.ceil(g.outerHeight());g.css("height",h);f=Math.floor(g.outerHeight(false))}}var i=parseFloat(f%e);var j=parseFloat(e-i);if(j<e/2){j=j+e}if(c.container===false){b.css("margin-bottom",j+"px");return}else if(b.parents(c.container).length>0){b.parents(c.container).css("margin-bottom",j+"px");return}b.css("margin-bottom",j+"px")})},init:function(){var c=false;var d=false;var e=this;var f=arguments;a(window).resize(function(){c=true});a(window).load(b.baselineAlign.apply(e,f));setInterval(function(){if(c){c=false;return b.baselineAlign.apply(e,f)}},500)}};a.fn.baselineAlign=function(c){if(b[c]){return b[c].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof c==="object"||!c){return b.init.apply(this,arguments)}else{a.error("Method "+c+" does not exist on jQuery.baselineAlign")}}})(jQuery)

// Place your extra jQuery/helper plugins here
