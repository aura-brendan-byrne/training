$(function()  {
	
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
}