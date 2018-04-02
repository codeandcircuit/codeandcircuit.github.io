
function setRandomColor()
{
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);

  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  document.body.style.backgroundColor = bgColor;
}

setInterval(setRandomColor, 1000);

function calculate() 
{
	var w = $('#weight').val() * 0.38;
	$('#Output').val(w);
}

$(function()
{
	setInterval(calculateDistanceToJupiter, 1000);
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
  		$("#distance").html(Math.round(data.miles_away));
  	},
    error:function(data)
    {
       $("#distance").html("We are sorry. A problem has occoured. File a bug on our website, link can be found on the about page!");
    },
  	dataType:"json",
  	contentType: "application/json"

  });
}
