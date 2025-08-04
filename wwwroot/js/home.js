$(document).ready(function () {
    $.ajax({
        url: 'products.json?v=' + new Date().getTime(), // Cache buster
        method: 'GET',
        dataType: 'json',
        success: function (products) {
            var container = $('#innerright');

            products.forEach(function (product) {
                var productHtml = `
                  <div class="divproduct" id="${product.id}">
                    <div class="productimage">
                      <img class="picture" src="${product.image}" />
                    </div>
                    <div class="desc">
                      <div class="productdesc">
                        <p>${product.description}</p>
                      </div>
                      <div class="quantity">
                        <p>${product.quantity}</p>
                      </div>
                      <div>
                        <span class="rupee">₹</span>
                        <span class="productprice">${product.price}</span>
                        <span class="mrp"> + GST</span><br />
                        <span class="mrp"> (₹${product.pricePer100g}/100 g)</span>
                        <span class="mrp"> M.R.P:</span>
                        <span class="mrp strike">₹${product.mrp}</span>
                      </div>
                    </div>
                  </div>
                `;
                container.append(productHtml);
            });
        },
        error: function (err) {
            console.error('Failed to load products.json:', err);
        }
    });

    $("#innerright").on("click", ".divproduct", function () {
        var productId = $(this).attr('id');
        var mrp = $(this).find(".mrp.strike").text().trim(); // 🔍 Get MRP inside this product
        var price = $(this).find(".productprice").text().trim(); 
		location.href = "details.html?name=" + productId + "&mrp=" + encodeURIComponent(mrp)+ "&price=" + encodeURIComponent(price);
    });

});