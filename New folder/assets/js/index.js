$(window).on('load', function() {
 //    if (localStorage.getItem("iplTeamDetails") === null) {
	// 	let iplString = JSON.stringify(objData);
	// 	localStorage.setItem("iplTeamDetails", iplString);
	// }
	// alert();
	let teamData = JSON.parse(localStorage.getItem("iplTeamDetails"));
	console.log("teamData",teamData);

});

function showTeamDetails(team){
	let teamDetailUrl = window.location.href.replace("/index.html", "/teamDetails.html?id="+team);
	// let teamDetailUrl = window.location.href+"/teamDetails"+team;
	window.location.href = teamDetailUrl;
}
