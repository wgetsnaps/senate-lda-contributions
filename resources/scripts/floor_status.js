function myFunction()
{
	
	$.ajax({
  type: "GET",
  url: "//floor.senate.gov/ViewPublisher.php?view_id=18",
  crossDomain: true,
  jsonpCallback: 'jsonCallback',
  dataType: "jsonp",
  success: function (msg) 
  {
  $.each(msg.sites, function (key,value)
  {
		
//document.getElementById("datacontent").innerHTML = value.description;
document.getElementById("contentdata").innerHTML = value.description;
document.getElementById("floorlink").href = value.floorproceedinglink;
//document.getElementById("floorlink").onClick = window.open(value.floorproceedinglink,'player','toolbar=no,directories=no,status=yes,scrollbars=no,resizable=yes,menubar=no,width=800,height=600'); return false;

document.getElementById("contentdata_mobile").innerHTML = value.description;
document.getElementById("floorlink_mobile").href = value.floorproceedinglink;

    });

  }
});
}