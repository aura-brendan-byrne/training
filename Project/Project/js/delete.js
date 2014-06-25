$(document).ready(function(){  

	$("#form").submit(function(event){

		/*if $('#form').validate = true{*/

		var frm = $('#form');
	    $.ajax({
	        type: "DELETE",
	        async: true,
		  	timeout: 300000,
	        url: "https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu",
	      
	    });

	    event.preventDefault();
	}); 


	/*
    $("#form").submit(function() {
    	//Do the AJAX post
        $.post($("#form").attr("action"), $("#form").serialize(), function(data){
            //do stuff here...
         $.ajax( { url: "https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu",
		  data: $('#form').serialize(), 
		  type: "POST",
		  contentType: "application/json" }
        });
        //Important. Stop the normal POST
        return false;
    }); 
	*/
});