var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "1a770880e43648ee9aa3c0056b9530ce"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
	
	
  //What happens if it gets data back 
	
  console.log(result);
  console.log(JSON.stringify(result.status));
  console.log(JSON.stringify(result.copyright));
  console.log(JSON.stringify(result.last_updated));
  console.log(JSON.stringify(result.num_results));
	
  $('#copyright').text(result.copyright);
	
  console.log(JSON.stringify(result.results[0].byline));
	
  $('#maintitle').text(result.results[0].title);
  $('#mainauthor').text(result.results[0].byline);
  $('#maindate').text(result.results[0].created_date);
	
	
	//$('#wrapper').empty();
	
	for(i = 0; i<result.results.length; i++) {
	// for each item in results, do something while
	//the loop variable is less than the length of the 
	//constructed templates and replace with result.results[i].value
	console.log(JSON.stringify(result.results[i].byline));
		
		
	//$('#wrapper').append("<h3>I'm Batman</h3>");
		
	$('#wrapper').append('\
	<div class="article"> \
	   <a href="https://placeholder.com"><img src="http://via.placeholder.com/190x126"></a> \
	   <h2>Main Story Headlines</h2> \
	   <p class="author">Author of Article</p> \
	   <p class="date">Date</p> \
	</div> \
	');
		
		
	var template = '<div class="article">';
	template += '<a href="https://placeholder.com"><img src="http://via.placeholder.com/190x126"></a>';
	template += '<h2>' + result.results[i].title + '</h2>';
	template += '<p class="author">' + result.results[i].byline + '</p>';
	template += '<p class="date">' + result.results[i].created_date + '</p>';
	template += '</div>';
	$('#wrapper').append(template);
	
	}
	
  //end of what happens if we get data back 
	
	
}).fail(function(err) {
  throw err;
});