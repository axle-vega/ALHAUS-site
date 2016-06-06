$(function () {
    'use strict';
    $('.readmorelink').click(function () {
        var text = $(this).prev();
        if (text.css('display') == 'none') {
            text.show(100);
            $('.more').css('display', 'inline');
            $(this).text('Скрыть подробности');
        } else {
            $(this).text('Читать подробнее');
            text.hide(100);
        }
    }); 
});