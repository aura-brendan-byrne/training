/* $.ajax( { url: "https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu",
		  data: $('#form').serialize(), 
		  type: "POST",
		  contentType: "application/json" } ); */

/* function clickHandler(e) {

	$.ajax( { url: "https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu",
		  data: $('#form').serialize(), 
		  type: "POST",
		  contentType: "application/json" } );
} */

/* $(function()  {
	
	$('#clickme').click(function()	{
		$.ajax( { url: "https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu",
		  data: $('#form').serialize(), 
		  type: "POST",
		  contentType: "application/json" } );
	});
}); */


/* $('#form').submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();
}); */


/* $("#form").submit(function() {

    // var url = "path/to/your/script.php"; // the script where you handle the form input.

    $.ajax({
           type: "POST",
           url: "https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu",
           data: $("#form").serialize(), // serializes the form's elements.
           success: function(data)
           {
               alert(data); 
           }
         });

    return false; // avoid to execute the actual submit of the form.
}); */



/*(function($) {
$.fn.serializeFormJSON = function() {

   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};
})(jQuery);

$('#form').submit(function(e) {

 var $form = $(this);
 var data = $form.serializeFormJSON();
 
 $.post('https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu', data, function(output) {
 
  // do something here
 $.ajax({
            type: "POST",
            url: "https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu",
            data: frm.serialize,
            dataType: 'json',
            contentType: "application/json",
        });
 });

 e.preventDefault();

});*/

/* $('#form').serializeJSON();

function ConvertFormToJSON(form){
    var array = jQuery(form).serializeArray();
    var json = {};
    
    jQuery.each(array, function() {
        json[this.name] = this.value || '';
    });
    
    return json;
}

var formData = JSON.stringify($("#form").serializeArray());

$.ajax({
  type: "POST",
  url: "serverUrl",
  data: formData,
  success: function(){},
  dataType: "json",
  contentType : "application/json"
}); */

/*var frm = $('#form');
frm.submit(function (ev) {
  ev.preventDefault();

  $.ajax({
    type: "POST",
    url: "https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu",
    data: JSON.stringify(frm.serializeArray()),
    dataType: 'json',
    contentType: "application/json",
    success: function (data) {
      alert('ok');
    }
  });
});*/


/*
var myobj = { myattr: "myvalue", otherattributes: 23};
console.log(myobj);
console.log(JSON.stringify(myobj));
*/

$(document).ready(function(){  

	$("#form").submit(function(event){

		/*if $('#form').validate = true{*/

		var frm = $('#form');
		var basicFormatArray = frm.serializeArray();
		var wantedFormatArray = {};
		
		$.map(basicFormatArray, function(x, y) //Thanks to jQuery for making this loop much shorter :)
								{
									wantedFormatArray[x['name']] = x['value'];
								});
		
		var data = JSON.stringify(wantedFormatArray, null, "\t");
				
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

      /*var form = document.getElementById("myform");
            form.reset();*/
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