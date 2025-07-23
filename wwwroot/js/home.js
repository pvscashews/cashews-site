$(document).ready(function () {

    $("#innerright").on("click", ".divproduct", function () {
        location.href = "details.html?name=" + $(this).attr('id');
    });

    var db = firebase.firestore();
    db.collection("Cashews").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data().Description);

            var product = document.createElement("div");
            product.innerHTML = '<div class= "productimage" >' +
                '<img class="picture" src="' + doc.data().ImageURL + '" />' +
                '</div>' +
                '<div class="desc">' +
                '<div class="productdesc">' +
                '<p>' +
                doc.data().Description +
                '</p>' +
                '</div>' +
                '<div class="quantity">' +
                '<p>' +
                doc.data().Weight + ' Kg, ' + doc.data().Name +
                '</p>' +
                '</div>' +
                '<div>' +
                '<span class="mrp">' +
                '₹' + doc.data().OldPrice +
                '</span>' +
                '<span class="productprice"> ₹' + doc.data().NewPrice + '</span>' +
                '</div>' +
                '<div class="negotiable">' +
                'Negotiable price' +
                '</div>' +
                '</div>';
            product.id = doc.id;
            product.className = 'divproduct';
            document.getElementById("innerright").appendChild(product);
        });
    });
});