$(document).ready(function() {

		//custom validation rule - text only
		$.validator.addMethod(
            "textOnly", 
            function(value, element) {
                return !/[0-9]*/.test(value);
            }
        ); 

		// Setup form validation on the #form element
		$("#form").validate({



			// Specify the validation rules
			rules: {
				patientname: {
					required: true,
					accept: "[a-zA-Z]+"
				},
				email: {
					required: true,
					email: true
				},
				dob: "date",
				hc: "digits",
				ward: "required",
				consultant: {
					required: true,
					accept: "[a-zA-Z]+"
				},
				gp: "required",
				clenliness: "required",
			},


	        // Specifying the validation error messages
			messages: {
				patientname: {
					required: "Please enter your name",
					accept: "Cannot contain numbers"
				},
				email: {
					required : "Please enter your email",
					email : "Not an email address"
				},
				dob: "Please enter your date of birth",
				hc: "Please enter your H+C Number",
				ward: "Please enter your ward",
				consultant: {
					requied: "Please enter your consultant's name",
					accept: "Cannot contain numbers"
				},
				gp: "Please enter your GP",
				clenliness: "Please enter your clenliness rating"

			},


			/* submitHandler: function(form) {
				form.submit();
			} */



		});

	});