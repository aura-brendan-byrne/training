var repos = $.getJSON('https://api.mongolab.com/api/1/databases/feedbackforms/collections/brendanforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu');

repos.done(function (repos) {
  var c = [];

    //c.push("<tr><th>" + "Object ID" + "</th>");
    c.push("<tr><th>" + "Patient Name" + "</th>");
    c.push("<th>" + "Email" + "</th>");
    c.push("<th>" + "Date of Birth" + "</th>");
    c.push("<th>" + "HC" + "</th>");
    c.push("<th>" + "Ward" + "</th>");
    c.push("<th>" + "GP" + "</th>");
    c.push("<th>" + "Consultant" + "</th>");
    c.push("<th>" + "Care" + "</th>");
    c.push("<th>" + "Clenilness" + "</th>");
    c.push("<th>" + "Services" + "</th>");
    c.push("<th>" + "Comments" + "</th></tr>");
  $.each(repos, function(key, value) {           
    //c.push("<tr><td>" + value._id.$oid+ "</td>");
    c.push("<tr><td>" + value.patientname + "</td>");
    c.push("<td>" + value.email + "</td>");
    c.push("<td>" + value.dob + "</td>");
    c.push("<td>" + value.hc + "</td>");
    c.push("<td>" + value.ward + "</td>");
    c.push("<td>" + value.gp + "</td>");
    c.push("<td>" + value.consultant + "</td>");
    c.push("<td>" + value.care + "</td>");
    c.push("<td>" + value.clenliness + "</td>");
    c.push("<td>" + value.services + "</td>");
    c.push("<td>" + value.comments + "</td></tr>"); 

    repos.sort(function(a,b) { return parseFloat(a.patientname) - parseFloat(b.patientname); } );
  });
  $('#records_table').html(c.join(""));
$("#records_table").tablesorter(); 
   $("#records_table tr:contains(undefined)").remove(); // removes all table rows with field values of undefined
   $("#records_table td").attr('contenteditable','true');
});

