$(document).ready(function(){  

	$("#form").submit(function(event){

		/*if $('#form').validate = true{*/

		/*var frm = $('#form');*/
      var frm = $('#form');
      var data = JSON.stringify(frm.serializeArray());
      

      /*function testobject(items){
		var data2 = JSON.stringify(frm());

      }*/
        var obj = JSON.stringify(frm);
      
	    $.ajax({
	        type: "POST",
	        url: "https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu",
	        data: data.serializeObject(),
	        dataType: 'json',
	        contentType: "application/json",
	        success: function (data) {
	            console.log('ok');
	        }
	    });

	    event.preventDefault();
	}); 
  });