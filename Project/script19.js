/*$(function()  {
	
	$('#clickme').click(function()	{

		$.getJSON('https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu', function(data) {

			var item = [];

			$.each(data, function(key, val) {

				items.push('<li id="' + key + '">' + val + '</li>');
			});

			$('<ul/>', {
				'class': 'interest-list',
				html: items.join('')

			}); .appendTo('body');


			);

		}
	}
} */

/* $(function()  {
	
	$('#clickme').click(function()	{
  $.ajax({
	        type: "DELETE",
	        async: true,
		  	timeout: 300000,
	        url: "https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu",
	      
	    });
}
} */

/*var request = new XMLHttpRequest();
request.open("GET", "https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu");
request.send(null);*/

$(document).ready(function(){

	var results;
	/*$('#clickme').click(function() {*/
		$.ajax({
   		 	type: 'json',
    		url: 'https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu',
    		method: 'GET',
    		success: function(obj) {
       			$.each(obj, function(key, value) { 
       				$("ul").append("<h4>"+"ID:"+value._id.$oid+"</h4>"
       								+"<li>"+"<b>Patient Name: </b>"+value.patientname+"</li>"
       								+"<li>"+"<b>Email: </b>"+value.email+"</li>"
       								+"<li>"+"<b>Date of Birth: </b>"+value.dob+"</li>"
       								+"<li>"+"<b>HC Number: </b>"+value.hc+"</li>"
       								+"<li>"+"<b>Ward: </b>"+value.ward+"</li>"
       								+"<li>"+"<b>Consultant: </b>"+value.consultant+"</li>"
       								+"<li>"+"<b>GP: </b>"+value.gp+"</li>"
       								+"<li>"+"<b>Care: </b>"+value.care+"</li>"
       								+"<li>"+"<b>Clenliness: </b>"+value.clenliness+"</li>"
       								+"<li>"+"<b>Services: </b>"+value.services+"</li>"
       								+"<li>"+"<b>Comments: </b>"+value.comments+"</li>"
       								+"<br>"
       					);

       				/* <li>name: record.firstnae + record.surname</li>
       				<li>date of birth: record.date_ofbirth</li>*/

       			});
			}
		});
	/*});*/
});

/*$("button").click( function ()  {

	$.ajax({
    type: 'json',
    url: 'https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu',
    method: 'GET',
    success: function(msg){
        alert(msg);
    }
});

});*/