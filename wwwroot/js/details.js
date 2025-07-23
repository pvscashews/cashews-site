$(document).ready(function () {
    $('.container').hide();
    var name = $.urlParam('name'); 
    var db = firebase.firestore();
    db.collection("Cashews").doc(name).get().then(function (doc) {
        $('#productimg').attr('src', doc.data().ImageURL);
        $('#zoomimage').attr('src', doc.data().ImageURL);
        $('.description').text(doc.data().Description);
        $('.quantity').text(doc.data().Weight + ' Kg, ' + doc.id);
        $('.mrp').text('Rs. ' + doc.data().OldPrice);
        $('.newprice').text('Rs. ' + doc.data().NewPrice);
    });
    $('.container').show();
});

