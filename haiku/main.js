var $video = document.getElementById('videoplayerhtml');

$(window).scroll(function(){
  var speed = 300;
  var scroll = $(this).scrollTop() / speed;
  $video.currentTime = scroll;
});