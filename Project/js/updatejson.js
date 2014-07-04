$(document).ready(function(){
	$("#clickme").click(function() {
		$("#records_table tbody tr").each(function(index, row){
			var cells = $(row).find("td");
			$.ajax({
				type: "PUT",
				url: "https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms/"+cells.eq(0).text()+"?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu",
				data: JSON.stringify({"$set":{"patientname":cells.eq(1).text(),
											  "email":cells.eq(2).text(),
											  "dob":cells.eq(3).text(),
											  "hc":cells.eq(4).text(),
											  "ward":cells.eq(5).text(),
											  "consultant":cells.eq(6).text(),
											  "gp":cells.eq(7).text(),
											  "care":cells.eq(8).text(),
											  "clenliness":cells.eq(9).text(),
											  "services":cells.eq(10).text(),
											  "comments":cells.eq(11).text(),}}),
				dataType: 'json',
				contentType: "application/json",
			}); 
		});
	});
});

/*
	&&&
	
	added a key and value to the function for #records_table to make it easier to store the data. USed a find function to make the data easier to find and corrected the invalid string in the url.
	
	The problem I was having is that the table was generating content before the api had correctly loaded the files into the system.
	
	&&&
*/