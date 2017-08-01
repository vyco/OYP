$(document).ready(function(){
  $('.main-body').css('display','none');
  $('.enter').click(function(){

  $('#enterSite').css('display','none');
  $('.main-body').css('display','block');
  });
  selector();
  nav();
  fader();
});
function selector(){
  $('.editorials').css('display','none');
$('.flex-unit[data-id=1]').click(function(){
  $('.main-body').css('display','none');
  $('.editorials').css('display','block');

});
}

function nav(){

  $('.back').click(function(event){
    event.preventDefault();
    $('#enterSite').css('display','block');
    $('.main-body').css('display','none');
  });
  $('.fa-arrow-left').click(function(){
    $('.editorials').css('display','none');
    $('.main-body').css('display','block');
  });
}

function fader(){
  $('.item').each(function(i){
    setTimeout(function(){
        $('.item').eq(i).addClass("animated");
        $('.item').eq(i).addClass("fadeIn");
    },i*400);
});
$('.pic-small').each(function(i){
  setTimeout(function(){
      $('.pic').eq(i).addClass("animated");
      $('.pic').eq(i).addClass("fadeIn");
  },i*2000);
});
}
