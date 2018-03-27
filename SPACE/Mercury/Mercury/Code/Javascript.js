document.body.style.backgroundColor = "blue";

function calculate() 
{
	var w = $('#weight').val() * 0.38;
	$('#Output').val(w);
}

$(function()
{
	calculateDistanceToJupiter()
});
 
function calculateDistanceToJupiter()
{
  $.ajax({
  	type: "POST",
  	url: "http://10.0.1.40:5000/ephem",
  	data: JSON.stringify({body:"Mercury"}),
  	success:function(data)
  	{
  		//alert(data.miles_away);
  		$("#distance").html(data.miles_away);
  	},
  	dataType:"json",
  	contentType: "application/json"

  });
}