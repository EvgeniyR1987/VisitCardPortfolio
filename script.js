$(window).resize(function(event) {
  mainblock();
});
function mainblock(){
  var h=$(window).outerHeight();
      $('.mainblock').css('min-height',h);
}
      mainblock();

baguetteBox.run('.gallery');
window.addEventListener('load', function() {
  baguetteBox.run('.gallery');
});
