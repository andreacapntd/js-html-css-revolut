$(document).ready(function() {
  $('.parent-down').hover(function() {
    console.log($(this).children());
    $(this).children('.dropdown').toggleClass('hidden', 'active');
  });

  $('i#item-chevron').click(function() {
    $(this).next('.drop').slideToggle('fast');
  });

  $("i.fa-bars").click(function (){
  $(".hamburger-menu").toggleClass('show');
  });


  $("i.fa-times").click(function(){
  $(".hamburger-menu").toggleClass('show');
  });
});
