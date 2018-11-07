// scroll nav
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-72px";
  }
  prevScrollpos = currentScrollPos;
}

// import html 
$(function(){
   var includes = $('[data-include]');
   jQuery.each(includes, function(){
     var file = 'views/' + $(this).data('include') + '.html';
     $(this).load(file);
   });
 });
