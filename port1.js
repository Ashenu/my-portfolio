/*close symbol for menu*/
$(document).ready(function(){
    $('#menu').click(function(){
$(this).toggleClass('fa-times');
//chance header according to close menu
$('header').toggleClass('toggle');

});

$(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');

$('header').removeClass('toggle');

});

});

