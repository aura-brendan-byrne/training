var TableData = JSON.stringify(storeTblValues());
console.log(TableData);

function storeTblValues()
{

  var TableHeaders = $.map($('#records_table thead th'), function(elm) { return $(elm).text(); });
    
  return $.map($('#records_table tbody tr'), function(tr){
      var cells = $(tr).children();
      var row = {};
      $.each(TableHeaders, function(i) { row[this] = cells.eq(i).text(); });
      return row;
  });
}


/* 
	&&&

		Trying out the $Set function to try and update my mongoDB entries. No joy as of yet.

	&&&
*/

/*
$("clickme")submit(function() {
	BasicDBObject newDocument = new BasicDBObject();
	newDocument.append("$set", new BasicDBObject().append(patientname, "Updated Name"));
 
	BasicDBObject searchQuery = new BasicDBObject().append(Ward, "East");
 
	collection.update(searchQuery, newDocument);

    event.preventDefault();
	}); 
*/


$.ajax({
	        type: "PUT",
	        url: "https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu",
	        data: TableData,
	        dataType: 'json',
	        contentType: "application/json",
	    });


/*
	&&&

	Trying to bing an on click function that will check of object id match then, if the match is confirmed dynamically populate the fields with the correct mongodb information fields.

	&&&
 */

/*
$("#clickme").bind("change", function(e){
  $.getJSON("https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu" + $("#clickme").val(),
        function(data){
          $.each(data, function(i,item){
            if ( "#Objectid" == value._id.$oid) {
              $("#patientname").val(value.patientname),
              $("#email").val(value.email),
              $("#dob").val(value.dob),
              $("#hc").val(value.hc),
              $("#ward").val(value.ward),
              $("#gp").val(value.gp),
              $("#consultant").val(value.consultant),
              $("#care").val(value.care),
              $("#clenliness").val(value.clenliness),
              $("#services").val(value.services),
              $("#comments").val(value.comments),
            }
          });
        });
});
*/

/* 
	&&&

	Attempt at trying to match the entries in the table to object id within mongoDB 

	&&&
*/

	
/*
for (var i=0; i<TableData.length; i++) {
  if (TableData[i].$oid === value._id.$oid) {
    replace;
    break;
  }
}*/



// Too Busy in console log section, 16:02 24/06/2014

/*var TableData = JSON.stringify(storeTblValues());
console.log(TableData)

function storeTblValues()
{

var TableData = [];
    
$('#records_table tr').each(function(){
    var cells = $(this).children();
    TableData.push({
         "Patient Name" : cells.eq(0).text(), // Patient Name
         "Email" : cells.eq(1).text(), // Email
         "Date of Birth" : cells.eq(2).text(), // Date of Birth
         "HC Number" : cells.eq(3).text(), // HC Number
         "Ward" : cells.eq(4).text(), // Ward
         "Consultant" : cells.eq(5).text(), // Consultant
         "GP" : cells.eq(6).text(), // GP
         "Care" : cells.eq(7).text(), // Care
         "Clenliness" : cells.eq(8).text(), // Clenliness
         "Services" : cells.eq(9).text(), // Services
         "Comments" : cells.eq(10).text(), // Comments
    });
}); 
TableData.shift();  // first row is the table header - so remove
console.log(TableData);
return TableData;
}*/



















/*$(document).ready(function() {
	$.ajax( { url: 'https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu&q={"_id":SET TO TR OBJECT ID}',
		  data: JSON.stringify( { "$set" : { "patientname" : td1 },
		  								   { "email" : td2},
		  								   { "dob" : td3},
		  								   { "hc" : td4},
		  								   { "ward" : td5},
		  								   { "consultant" : td6},
		  								   { "gp" : td7},
		  								   { "care" : td8},
		  								   { "clenliness" : td9},
		  								   { "services" : td10},
		  								   { "comments" : td11}
		} ),
		  type: "PUT",
		  contentType: "application/json" } );

	$("#clickme").click(function(event){

			$.ajax({
	        type: "POST",
	        url: "https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu",
	        data: data,
	        dataType: 'json',
	        contentType: "application/json",
	        success: function (data) {
	            console.log('ok');
	        }
	    });

	    event.preventDefault();
	}); 

}); */

/*
Reads the table and stores the values into the TableData array.
 */

/*var TableData;
TableData = storeTblValues()
TableData = $.toJSON(TableData);

function storeTblValues()
{

var TableData = new Array();
    
$('#records_table tr').each(function(row, tr){
	
	TableData = TableData 
        + $(tr).find('td:eq(0)').text() + ' '  // Patient Name
        + $(tr).find('td:eq(1)').text() + ' '  // Email
        + $(tr).find('td:eq(2)').text() + ' '  // Date of Birth
        + $(tr).find('td:eq(3)').text() + ' '  // HC Number
        + $(tr).find('td:eq(4)').text() + ' '  // Ward
        + $(tr).find('td:eq(5)').text() + ' '  // Consultant
        + $(tr).find('td:eq(6)').text() + ' '  // GP
        + $(tr).find('td:eq(7)').text() + ' '  // Care
        + $(tr).find('td:eq(8)').text() + ' '  // Clenliness
        + $(tr).find('td:eq(9)').text() + ' '  // Services
        + $(tr).find('td:eq(10)').text() + ' '  // Comments
        + '\n';


    TableData[row]={
          "Patient Name" : $(tr).find('td:eq(0)').text() // Patient Name
        , "Email" : $(tr).find('td:eq(1)').text() // Email
        , "Date of Birth" : $(tr).find('td:eq(2)').text() // Date of Birth
        , "HC Number" : $(tr).find('td:eq(3)').text() // HC Number
        , "Ward" : $(tr).find('td:eq(4)').text() // Ward
        , "Consultant" : $(tr).find('td:eq(5)').text() // Consultant
        , "GP" : $(tr).find('td:eq(6)').text() // GP
        , "Care" : $(tr).find('td:eq(7)').text() // Care
        , "Clenliness" : $(tr).find('td:eq(8)').text() // Clenliness
        , "Services" : $(tr).find('td:eq(9)').text() // Services
        , "Comments" : $(tr).find('td:eq(10)').text() // Comments
    }
}); 
TableData.shift();  // first row is the table header - so remove
console.log(TableData);
return TableData;
}
*/

/*var TableData;
TableData = storeTblValues();
TableData = JSON.stringify(TableData);

function storeTblValues()
{

var TableData = [];
    
$('#records_table tr').each(function(row, tr){
    TableData.push({
         "Patient Name" : $(tr).find('td:eq(0)').text(), // Patient Name
         "Email" : $(tr).find('td:eq(1)').text(), // Email
         "Date of Birth" : $(tr).find('td:eq(2)').text(), // Date of Birth
         "HC Number" : $(tr).find('td:eq(3)').text(), // HC Number
         "Ward" : $(tr).find('td:eq(4)').text(), // Ward
         "Consultant" : $(tr).find('td:eq(5)').text(), // Consultant
         "GP" : $(tr).find('td:eq(6)').text(), // GP
         "Care" : $(tr).find('td:eq(7)').text(), // Care
         "Clenliness" : $(tr).find('td:eq(8)').text(), // Clenliness
         "Services" : $(tr).find('td:eq(9)').text(), // Services
         "Comments" : $(tr).find('td:eq(10)').text(), // Comments
    });
}); 
TableData.shift();  // first row is the table header - so remove
console.log(TableData);
return TableData;
}
*/

/*$(document).ready(function() {

    $('select.#records_table').change(function () {
        var res_id = $(this).val();
        var index = $(this).data('index');

        $.ajax({
            type: 'POST',
            url:'',
            data: '{ "res_id":"' + res_id + '", "index":"' + index + '" }',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (response) {
                          
            }
        });
        return false;
    });

});*/