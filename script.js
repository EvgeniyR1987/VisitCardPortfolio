/*$('.scroll-body').niceScroll('.scroll-list',scrolloptions());
}
if(navigator.appVersion.indexOf("Mac")!=-1){
}else{
  if($('.scroll-body').length>0){scroll();}
}
if($('.t,.tip').length>0){
  tip();
}
function tip(){
}*/

$(window).resize(function(event) {
  mainblock();
});
function mainblock(){
  var h=$(window).outerHeight();
      $('.mainblock').css('min-height',h);
}
      mainblock();
                 
