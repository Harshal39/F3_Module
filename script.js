"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">

		/* Add "https://api.ipify.org?format=json" to 
		get the IP Address of user*/
		$(document).ready(()=>{
			$.getJSON("https://api.ipify.org?format=json",
			function (data) {

				// Displayin IP address on screen
				$("#gfg").html(data.ip);
			})
		});
	