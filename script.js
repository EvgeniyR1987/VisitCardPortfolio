$(window).resize(function(event) {
  mainblock();
});
function mainblock(){
  var h=$(window).outerHeight();
      $('.mainblock').css('min-height',h);
}
      mainblock();

const gallery = baguetteBox.run('.gallery', {
});

$('.filter__item').click(function(event) {
  var i=$(this).data('filter');
  if (i==1) {
    $('.portfolio__column').show();
  }else{
    $('.portfolio__column').hide();
    $('.portfolio__column.f_'+i).show();
  }
  $('.filter__item').removeClass('active');
  $(this).addClass('active');
  return false;
});
