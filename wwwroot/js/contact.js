function updateSelectedCategories() {
    const selectedValues = $('input[name="Catogories"]:checked')
        .map(function () {
            return $(this).val();
        }).get().join(',');

    $('#SelectedCategories').val(selectedValues);
    console.log("Selected:", selectedValues);
}

const scripturl = "https://script.google.com/macros/s/AKfycbxb_PBtGWf6rcFIcwF2XIQjca08mTeQcNVQ-flOaB8wHOKwwvjD75F0x6rHTRZSel9lzw/exec";

	
$(document).ready(function () {
	
	 $('input[name="Catogories"]').on('change', updateSelectedCategories);
        updateSelectedCategories(); // run once at start in case of prechecked boxes
		
    $('.success').delay(4000).fadeOut(400);
    $('#submit').click(function (e) {
			e.preventDefault();

			// Collect values
			const email = $('#email').val().trim();
			const mobile = $('#mobile').val().trim();
			const quantity = $('#quantity').val().trim();
			const unit = $('#unit').val();
			const categories = $('#SelectedCategories').val();
			const message = $('#message').val().trim();


			// Basic validation
			if (!email || !mobile || !quantity || !categories) {
			  alert("Please fill all required fields.");
			  return;
			}




			// Prepare data
			const formData = {
			  email: email,
			  mobile: mobile,
			  quantity: quantity,
			  unit: unit,
			  categories: categories,
			  message: message
			};

			// Send via jQuery AJAX
			$.ajax({
				  url: scripturl,
				  method: 'POST',
				  contentType: 'application/json',
				  data: JSON.stringify(formData),
				  success: function (response) {
					alert('Form submitted successfully!');
					$('form')[0].reset();
				  },
				  error: function (error) {
					console.error('Submission failed:', error.responseText);
					alert('Failed to submit form.');
				  }
				});
		  });
    });

