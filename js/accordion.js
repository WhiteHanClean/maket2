$(document).on('click', '.accordion-trigger', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().find('.accordion-block').first().slideToggle(300);
})