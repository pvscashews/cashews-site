var lastScrollTop = 0;
$(document).ready(function () {
    $('.ng-pristine').focusout(function () {
        if ($(this).val() === "") {
            $(this).parent().removeClass("md-input-focused");
        }
    });
    $('.ng-pristine').click(function () {
        $(this).parent().addClass("md-input-focused");
    });

    $(window).on('scroll', function () {
        st = $(this).scrollTop();
        if (st < lastScrollTop) {
            $('.topheader').slideDown();
        }
        else {
            $('.topheader').slideUp();
        }
        lastScrollTop = st;
    });
});

$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results === null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
};
