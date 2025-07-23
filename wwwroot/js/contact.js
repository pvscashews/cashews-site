function updateSelectedCategories() {
    const selectedValues = $('input[name="Catogories"]:checked')
        .map(function () {
            return $(this).val();
        }).get().join(',');

    $('#SelectedCategories').val(selectedValues);
    console.log("Selected:", selectedValues);
}

const scripturl = "https://script.google.com/macros/s/AKfycbylRcpxaplGc2Dlxr1I3ifuGcu80rtmjfApWeozmMSOnvL6WMjBlQyLHghnjKCjaB-KhQ/exec";

	

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
			// const formData = {
			  // email: email,
			  // mobile: mobile,
			  // quantity: quantity,
			  // unit: unit,
			  // categories: categories,
			  // message: message
			// };

			// Send via jQuery AJAX
			// $.ajax({
				  // url: scripturl,
				  // method: 'POST',
				  // contentType: 'application/json',
				  // data: JSON.stringify(formData),
				  // success: function (response) {
					// alert('Form submitted successfully!');
					// $('form')[0].reset();
				  // },
				  // error: function (error) {
					// console.error('Submission failed:', error.responseText);
					// alert('Failed to submit form.');
				  // }
				// });
				
				const formData = new URLSearchParams();
					formData.append("email", email);
					formData.append("mobile", mobile);
					formData.append("categories", categories);
					formData.append("quantity", quantity);
					formData.append("unit", unit);
					formData.append("message", message);
				
				fetch('https://script.google.com/macros/s/AKfycbylRcpxaplGc2Dlxr1I3ifuGcu80rtmjfApWeozmMSOnvL6WMjBlQyLHghnjKCjaB-KhQ/exec', {
				method: 'POST',
				  headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				  },
				  body: formData
				})
				.then(response => response.text())
				.then(data => {
				  alert("Submitted successfully");
				})
				.catch(error => {
				  console.error("Error:", error);
				  alert("Submission failed.");
				});																			
		  });
    });

