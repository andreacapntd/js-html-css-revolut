$(document).ready(function() {
  $('.parent-down').hover(function() {
    console.log($(this).children());
    $(this).children('.header-menu-icon').toggleClass('hidden', 'active');
  });

  $('i#item-chevron').click(function() {
    $(this).next('.drop').slideToggle('fast');
  });

  $("i.fa-bars").click(function (){
  $(".hamburger-menu").toggleClass('hidden', 'active');
  });


  $("i.fa-times").click(function(){
  $(".hamburger-menu").toggleClass('hidden', 'active');
  });
});
