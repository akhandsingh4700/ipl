$(window).on('load', function() {

	let playerId ="";
	var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == "id") 
        {
            playerId = sParameterName[1];
            console.log(playerId);
        }
    }
    console.log("playerId",playerId);

});
