$(function() {
  var menuVisible = false;
  $('#submenu').click(function() {
    if (menuVisible) {
      $('#submenu').css({'display':'none'});
      menuVisible = false;
      return;
    }
    $('#submenu').css({'display':'block'});
    menuVisible = true;
  });
  $('#submenu').click(function() {
    $(this).css({'display':'none'});
    menuVisible = false;
  });
});
