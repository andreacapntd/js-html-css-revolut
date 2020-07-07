$(document).ready(function() {
  $('.parent-down').hover(function() {
    $(this).children('.dropdown').toggle();
  });
});
