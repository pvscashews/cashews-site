
$(document).ready(function () {
    $('.success').delay(4000).fadeOut(400);
    $('#submit').click(function () {
        var flag = true;
        $('input[type=text]').each(function () {
            var id = $(this).attr('id');
            if ($(this).val() == "") {
                $('#val_' + id).show();
                flag = false;
            }
            else {
                $('#val_' + id).hide();
            }
        });

        var checked = false;
        $('input[type=checkbox]').each(function () {
            if ($(this).prop('checked')) {
                checked = true;
            }
        });

        if (!checked) {
            $('#val_category').show();
            flag = false;
        }
        else {
            $('#val_category').hide();
        }


        $('input[type=email]').each(function () {
            var id = $(this).attr('id');
            if ($(this).val() == "") {
                $('#val_' + id).show();
                flag = false;
            }
            else {
                $('#val_' + id).hide();
            }
        });

        return flag;
    });
});

// function initMap() {
    // var uluru = { lat: 11.702473, lng: 79.548603 };
    // var map = new google.maps.Map(document.getElementById('map'), {
        // zoom: 15,
        // center: uluru
    // });
    // var marker = new google.maps.Marker({
        // position: uluru,
        // map: map
    // });
// }