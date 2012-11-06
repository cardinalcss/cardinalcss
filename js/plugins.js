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
 * Equal height columns
 * jQuery plugin
 * @author Luka Soppermann
 * https://github.com/lukasoppermann/fs-equal-height
 */

(function($) {
    $.fn.equalHeightColumns = function(){
        // create variables
        var _this, _column = $(this), position_top, row_divs = new Array(), current_tallest, current_row_start, current_div;

        // set column height to auto (so it can be calculate without padding)
        _column.height('auto');

        // loop through columns
        _column.each(function(){
            // cache selection
            _this = $(this);

            // get top position
            position_top = _this.offset().top;

            // check for new row
            if(current_row_start != position_top)
            {
                var len = row_divs.length;

                if( len > 1)
                {
                    // set heights for completed row
                    for(var current_div = 0; current_div < len; current_div++)
                    {
                        row_divs[current_div].height(current_tallest);
                    }
                }

                // set the variables for the new row
                row_divs.length = 0; // empty the array
                current_row_start = position_top;
                current_tallest = _this.height();
                row_divs.push(_this);
            }

            else
            {
                 // add column
                 row_divs.push(_this);
                 current_tallest = Math.max(current_tallest, _this.height());
            }

            // do the last row if more than 1 item in it
            var len = row_divs.length;

            if( len > 1)
            {
                for(var current_div = 0; current_div < len; current_div++)
                {
                     row_divs[current_div].height(current_tallest);
                }
            }
        });

        // return columns for chainability
        return _column;
    }
})(jQuery);

/**
 * Smart window resize
 * jQuery plugin
 * @author Paul Irish
 * http://paulirish.com/2009/throttled-smartresize-jquery-event-handler/
 */

(function($,sr) {

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
    // smartresize
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
