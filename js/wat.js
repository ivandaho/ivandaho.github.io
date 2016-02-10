var main = function() {

  $('video').trigger('pause').hide();

  // stuff for video playback and stop
  $('.card').on('mouseover', ".videos", function() {
    //$(this).find('.icon').hide();
    $('#video_1').show().trigger('play');
    $('.viddiv').animate({
      opacity: "1"
    }, 200);
  })
  .mouseout(function() {
    //$(this).find('.icon').show();
    $('#video_1').hide().trigger('pause');
    $('.viddiv').animate({
      opaciy: "0"
    }, 200);
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

  $('.card').on('mouseover', ".prog", function() {
    $('.bgimgprog').stop().animate({
      opacity: "1"
    }, 200);
  })
  .mouseout(function() {
    $('.bgimgprog').stop().animate({
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

  // stuff for animation drop down menu...
  
  var clicktoggle;
  var toggletop_prog;
  var toggleopc_prog;
  var toggletop_photos;
  var toggleopc_photos;
  var toggletop_videos;
  var toggleopc_videos;
  var toggletop_music;
  var toggleopc_music;
  $('.card').on('click', ".prog", function() {
    toggletop_prog = (toggletop_prog == "0px") ? "-50": "0px";
    toggleopc_prog = (toggleopc_prog == "1") ? "0": "1";
    clicktoggle = (clicktoggle == "all") ? "none": "all";
    $(this).parent().find('.submenuholder').find('.submenu').css("pointer-events", clicktoggle);
    $('.sub_prog').show().animate({
      //top: toggletop_prog,
      //opacity: toggleopc_prog
    }, 200);
  });

  $('.card').on('click', ".photos", function() {
    toggletop_photos = (toggletop_photos == "0px") ? "-50px": "0px";
    toggleopc_photos = (toggleopc_photos == "1") ? "0": "1";
    clicktoggle = (clicktoggle == "all") ? "none": "all";
    $(this).parent().find('.submenuholder').find('.submenu').css("pointer-events", clicktoggle);
    $('.sub_photos').show().animate({
      //top: toggletop_photos,
      //opacity: toggleopc_photos
    }, 200);
  });

  $('.card').on('click', ".videos", function() {
    toggletop_videos = (toggletop_videos == "0px") ? "-50px": "0px";
    toggleopc_videos = (toggleopc_videos == "1") ? "0": "1";
    clicktoggle = (clicktoggle == "all") ? "none": "all";
    $(this).parent().find('.submenuholder').find('.submenu').css("pointer-events", clicktoggle);
    $('.sub_videos').show().animate({
      //top: toggletop_videos,
      //opacity: toggleopc_videos
    }, 200);
  });

  $('.card').on('click', ".music", function() {
    toggletop_music = (toggletop_music == "0px") ? "-50px": "0px";
    toggleopc_music = (toggleopc_music == "1") ? "0": "1";
    clicktoggle = (clicktoggle == "all") ? "none": "all";
    $(this).parent().find('.submenuholder').find('.submenu').css("pointer-events", clicktoggle);
    $('.sub_music').show().animate({
      //top: toggletop_music,
      //opacity: toggleopc_music
    }, 200);
  });

};


$(document).ready(main);
