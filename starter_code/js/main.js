$(document).ready(function() {

  $('.readmore').click(showMore);

  function showMore(event) {
    event.preventDefault();
    $('.readmore').hide();
    $('#show-this-on-click').slideDown();
    $('.readless').show();
  }

  $('.readless').click(showLess);

  function showLess(event) {
    event.preventDefault();
    $('.readless').hide();
    $('#show-this-on-click').slideUp();
    $('.readmore').show();
  }

  $('.learnmore').click(learnMore);

  function learnMore(event) {
    event.preventDefault();
    $('.learnmore').hide();
    $('#learnmoretext').slideDown();
  }
});
