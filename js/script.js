$(document).ready(function() {
  $('.parent-down').hover(function() {
    console.log($(this).children());
    $(this).children('.header-menu-icon').toggleClass('hidden', 'active');
  });
});
