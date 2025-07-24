$(document).ready(function () {

    $("#innerright").on("click", ".divproduct", function () {
        var productId = $(this).attr('id');
        var mrp = $(this).find(".mrp.strike").text().trim(); // 🔍 Get MRP inside this product
        var price = $(this).find(".productprice").text().trim(); 
		location.href = "details.html?name=" + productId + "&mrp=" + encodeURIComponent(mrp)+ "&price=" + encodeURIComponent(price);
    });

});