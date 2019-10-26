var allfunctions = new functions();

allfunctions.menu();
if ( $('body').attr('id') == 'homepage' ){
  window.onload = function() {
    allfunctions.readmore();
    allfunctions.jobs();
    allfunctions.careerprogress();
    allfunctions.homegrid();
  };
}
if ( document.querySelector('.flickity') ){
  window.onload = function() {
    allfunctions.flickity();
  };
};