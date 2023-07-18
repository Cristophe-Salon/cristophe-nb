
/* This script is a custom script to control the 'show' / 'hide' extra feature.  
  To use: give each button you want to make an expander an href of "expand-3", if you want it to expand / collapse the next 3 blocks.

  Make sure to make each button say 'Show More' as its default text.
  */

  var SHOW_MORE = 'Show More'
  var COLLAPSE = 'Show Less'
  $(window).load(function(){
    // prepares all buttons by wrapping the correct # of following divs into a div with class 'extra_gallery'
    $('a[href^="#expand"]').each(function(){
      // parse # of sibling elements to wrap from href attribute and then wrap them.
      var n = parseInt($(this).attr('href').split('-')[1]);
      var next_n_divs = $(this).parents('div.sqs-block').nextAll().slice(0,n)
      // this is the line that is different.  we use display:none; on the DOM element that wraps the additional gallery.
      next_n_divs.wrapAll('<div class="extra-gallery" style="display:none;"></div>');
/*      // preload_images
      next_n_divs.find('img').each(function(){
        image = new Image();
        image.src = $(this).attr('data-src')+'?format=500w';
        console.log($(this).attr('data-src'));
      });
      // control for click behavior
      */
      $(this).click(function(){
        var target_gallery = $(this).parents('div.sqs-block').next('div.extra-gallery')
        if (target_gallery.is(':visible')){
          $(this).text(SHOW_MORE);
        }
        else {
          $(this).text(COLLAPSE);
        }
        target_gallery.slideToggle();
        return false;
      });
    });
  });
