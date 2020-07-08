$(document).ready(function() {
  $('.parent-down').hover(function() {
    console.log($(this).children());
    $(this).children('.header-menu-icon').toggleClass('hidden', 'active');
  });

  $('#item-chevron').click(function() {
    $(this).next('.drop').slideToggle('fast');
  });
});
