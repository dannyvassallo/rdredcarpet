function overlayMargin(){
  var headH = $('img.fullw.header').height();
  $('.overlay').css({'margin-top':headH});
}

$(window).resize(function(){
  overlayMargin();
});
