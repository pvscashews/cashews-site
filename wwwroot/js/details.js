$(document).ready(function () {
    $('.container').hide();
    var name = $.urlParam('name'); 
	var price = $.urlParam('price'); 
    var mrp = $.urlParam('mrp'); 
    $('#productimg').attr('src', 'https://www.pvscashews.com/wwwroot/images/products/' + name +'.jpg');
    $('#zoomimage').attr('src', 'https://www.pvscashews.com/wwwroot/images/products/' + name + '.jpg');
    $('#productimg-mob').attr('src', 'https://www.pvscashews.com/wwwroot/images/products/' + name + '.jpg');
    $('#zoomimage-mob').attr('src', 'https://www.pvscashews.com/wwwroot/images/products/' + name + '.jpg');
    $('.description').text('Fresh organic premium whole cashews | ' + name);
    $('.quantity').text('1 Kg, ' + name);
    $('.mrp').text(mrp);
    $('.newprice').text('₹' + price);

    $('.container').show();
});

