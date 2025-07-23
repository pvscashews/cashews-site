$(document).ready(function () {

    $("#innerright").on("click", ".divproduct", function () {
        location.href = "details.html?name=" + $(this).attr('id');
    });

});