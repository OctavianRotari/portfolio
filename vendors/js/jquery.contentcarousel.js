(function($) {
  var aux = {
    // navigates left / right
    navigate: function( dir, $el, $wrapper, opts, cache ) {

      var scroll = opts.scroll,
        factor = 1,
        idxClicked = 0;

      if( cache.expanded ) {
        scroll		= 1; // scroll is always 1 in full mode
        factor		= 1; // the width of the expanded item will be 3 times bigger than 1 collapsed item
        idxClicked	= cache.idxClicked; // the index of the clicked item
      }

      // clone the elements on the right / left and append / prepend them according to dir and scroll
      if( dir === 1 ) {
        $wrapper.find('div.ca-item:lt(' + scroll + ')').each(function(i) {
          $(this).clone(true).css( 'left', ( cache.totalItems - idxClicked + i ) * cache.itemW * factor + 'px' ).appendTo( $wrapper );
        });
      } else {
        var $first	= $wrapper.children().eq(0);
        $wrapper.find('div.ca-item:gt(' + ( cache.totalItems  - 1 - scroll ) + ')').each(function(i) {
          // insert before $first so they stay in the right order
          $(this).clone(true).css( 'left', - ( scroll - i + idxClicked ) * cache.itemW * factor + 'px' ).insertBefore( $first );
        });
      }

      // animate the left of each item
      // the calculations are dependent on dir and on the cache.expanded value
      $wrapper.find('div.ca-item').each(function(i) {
        var $item = $(this);
        $item.stop().animate({
          left:  ( dir === 1 ) ? '-=' + ( cache.itemW * factor * scroll ) + 'px' : '+=' + ( cache.itemW * factor * scroll ) + 'px'
        }, opts.sliderSpeed, opts.sliderEasing, function() {
          if( ( dir === 1 && $item.position().left < - idxClicked * cache.itemW * factor ) || ( dir === -1 && $item.position().left > ( ( cache.totalItems - 1 - idxClicked ) * cache.itemW * factor ) ) ) {
            // remove the item that was cloned
            $item.remove();
          }
          cache.isAnimating	= false;
        });
      });

    },

  },
    methods = {
      init: function( options ) {

        if( this.length ) {

          var settings = {
            sliderSpeed: 500,// speed for the sliding animation
            sliderEasing: 'easeOutExpo',// easing for the sliding animation
            itemSpeed	: 500,// speed for the item animation (open / close)
            itemEasing: 'easeOutExpo',// easing for the item animation (open / close)
            scroll: 1, // number of items to scroll at a time
          };

          return this.each(function() {

            // if options exist, lets merge them with our default settings
            if ( options ) {
              $.extend( settings, options );
            }

            var $el = $(this),
              $wrapper = $el.find('div.ca-wrapper'),
              $items = $wrapper.children('div.ca-item'),
              cache = {};
              left = 1;
              right = -1;

            // save the with of one item
            cache.itemW = $items.width();
            // save the number of total items
            cache.totalItems = $items.length;

            // control the scroll value
            if( settings.scroll < 1 )
              settings.scroll = 1;
            else if( settings.scroll > 3 )
              settings.scroll = 3;

            // hide the items except the first 3
            $wrapper.css( 'overflow', 'hidden' );

            // the items will have position absolute
            // calculate the left of each item
            $items.each(function(i) {
              $(this).css({
                position	: 'absolute',
                left		: i * cache.itemW + 'px'
              });
            });

            window.setInterval(function(){
              if( cache.isAnimating ) return false;
              cache.isAnimating = true;
              aux.navigate(settings.direction, $el, $wrapper, settings, cache );
            }, 3000);

          });
        }
      }
    };

  $.fn.contentcarousel = function(method) {
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, -1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.contentcarousel' );
    }
  };


})(jQuery);
