$(window).resize(function(event) {
  mainblock();
});
function mainblock(){
  var h=$(window).outerHeight();
      $('.mainblock').css('min-height',h);
}
      mainblock();
baguetteBox.run('.gallery', {
        captions: true,
        buttons: 'auto',
        fullScreen: false,
        noScrollbars: false,
        titleTag: true,
        async: false,
        preload: 2,
        animation: 'fadeIn',
        afterShow: function() {
            alert('Thanks');
        },
        afterHide: function() {
            alert('Watch again');
        },
        onChange: null,
        overlayBackgroundColor: 'rgba(113,117,115,0.8)'
    });
