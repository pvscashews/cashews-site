$(document).ready(function () {
    $('.container').hide();
    var name = $.urlParam('name'); 

    $('#productimg').attr('src', 'https://www.pvscashews.com/wwwroot/images/products/W240.jpg');
    $('#zoomimage').attr('src', 'https://www.pvscashews.com/wwwroot/images/products/W240.jpg');
    $('.description').text('Fresh organic whole cashews');
    $('.quantity').text('1 Kg');
    $('.mrp').text('Rs. 500');
    $('.newprice').text('Rs. 400');

    $('.container').show();
});

