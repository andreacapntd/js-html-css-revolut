$(document).ready(function() {
  $('.parent-down').hover(function() {
    $(this).children('.header-menu-icon').toggleClass('hidden', 'active');
  });
});
