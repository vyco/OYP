$(document).ready(function(){
  lockup();
  selector();
  nav();
  fader();
  filter();
  imgAllocation();
});
function lockup(){
  $('.main-body').css('display','none');
  $('.enter').click(function(){

  $('#enterSite').css('display','none');
  $('.main-body').css('display','block');
  });
}
function selector(){
  $('.editorials').css('display','none');
  $('.landscapes').css('display','none');
  $('.mixed').css('display','none');
$('.flex-unit[data-id=1]').click(function(){
  $('.main-body').css('display','none');
  $('.editorials').css('display','block');

});

$('.flex-unit[data-id=2]').click(function(){
$('.main-body').css('display','none');
$('.landscapes').css('display','block');

});
$('.flex-unit[data-id=3]').click(function(){
$('.main-body').css('display','none');
$('.mixed').css('display','block');

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
    $('.landscapes').css('display','none');
    $('.mixed').css('display','none');
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
$('.flex-unit').css('opacity','0');
$('.flex-unit').each(function(i){
  setTimeout(function(){

      $('.flex-unit').eq(i).css('opacity','1');
  },2000);
});

}
function filter(){
  var accepted = $('.pic[data-state=accepted]');
  var unaccepted = $('.pic[data-state=unaccepted]');
  var all = $('.pic');
$('.btn-accepted').click(function(){
  console.log("showing accepted photos....")
  unaccepted.css('display','none');
  unaccepted.addClass("unaccepted");
});
$('.btn-all').click(function(){
  $('.pic').css('display','flex');
});
$('.btn-rejected').click(function(){
  accepted.css('display','none');
});
}
function imgAllocation(){
$('.pic-small').css('background','url(https://images.unsplash.com/photo-1496482475496-a91f31e0386c?dpr=0.75&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)')
}
