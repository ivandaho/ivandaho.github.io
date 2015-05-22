var main = function() {

  $('video').trigger('pause').hide();

  // stuff for video playback and stop
  $('.card').on('mouseover', ".videos", function() {
    //$(this).find('.icon').hide();
    $('#video_1').show().trigger('play').show();
  })
  .mouseout(function() {
    //$(this).find('.icon').show();
    $('video').trigger('pause').hide();
  });

  // stuff for changing background image
  $('.card').on('mouseover', ".music", function() {
    $('.bgimgmusic').stop().animate({
      opacity: "1"
    }, 200);
  })
  .mouseout(function() {
    $('.bgimgmusic').stop().animate({
      opacity: "0"
    }, 200);
  });

  $('.card').on('mouseover', ".photos", function() {
    $('.bgimgphotos').stop().animate({
      opacity: "1"
    }, 200);
  })
  .mouseout(function() {
    $('.bgimgphotos').stop().animate({
      opacity: "0"
    }, 200);
  });

/* old method
  $('.card').mouseover(function() {
    $('.jumbotron').css('background-image', 'url("../img/bg_musicgear.jpg")');
  })
  .mouseout(function() {
    $('.jumbotron').css('background-image', 'url("../img/bg_provisions.jpg")');
  });
*/


  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "50px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};


$(document).ready(main);
