$(document).ready(function(){
  $('.main-body').css('display','none');
  $('.enter').click(function(){
  $("#enterSite").css('opacity','0');
  $('#enterSite').css('display','none');
  $('.main-body').css('opacity','1');
  $('.main-body').css('display','block');
  });
  selector();
  nav();
});
function selector(){
  $('.editorials').css('display','none');
$('.flex-unit[data-id=1]').click(function(){
  $('.main-body').css('display','none');
  $('.editorials').css('display','block');

});
}

function nav(){
  $('.fa-arrow-left').click(function(){
    $('.editorials').css('display','none');
    $('.main-body').css('display','block');
  });
}
