$(window).resize(function(event) {
  mainblock();
});
function mainblock(){
  var h=$(window).outerHeight();
      $('.mainblock').css('min-height',h);
}
      mainblock();
