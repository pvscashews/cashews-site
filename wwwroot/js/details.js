$(document).ready(function () {
    $('.container').hide();
    var name = $.urlParam('name'); 
	var price = $.urlParam('price'); 
    var mrp = $.urlParam('mrp'); 
    $('#productimg').attr('src', 'https://www.pvscashews.com/wwwroot/images/products/' + name +'.jpg');
    $('#zoomimage').attr('src', 'https://www.pvscashews.com/wwwroot/images/products/' + name +'.jpg');
    $('.description').text('Fresh organic whole cashews');
    $('.quantity').text('1 Kg');
    $('.mrp').text(mrp);
    $('.newprice').text(price);

    $('.container').show();
});

