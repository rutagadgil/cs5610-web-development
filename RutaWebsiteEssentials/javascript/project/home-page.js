$(document).ready(function () {
    $(function () {
        $('.fadein img:gt(0)').hide();
        setInterval(function () {
            $('.fadein :first-child').fadeOut(4000)
               .next('img').fadeIn(5000)
               .end().appendTo('.fadein');
        }, 5000);
    });
});