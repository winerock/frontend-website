$(document).ready(function () {

    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {
        mainNav.classList.toggle('active');
    });
});

$(function() {
    $('.product-info').click(function () {
        var $content = $(this).find('.acc-content');
        if ($content.hasClass('open')) {
            $content.removeClass('open');
            $content.slideUp();
            $(this).find('span').text('+');
        } else {
            $content.addClass('open');
            $content.slideDown();
            $(this).find('span').text('-');
        }
    });

});