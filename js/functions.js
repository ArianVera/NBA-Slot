/*
function press(){
	//Disable onClick() method, play audio files, and reset to initial values and styles.
	document.getElementById('button').style.pointerEvents = 'none';
	var button_audio = new Audio('audio/button.mp3');
	button_audio.play();
		
	var spinning_audio = new Audio('audio/spinning.mp3');
	spinning_audio.play();
	
	document.getElementById('button').style.backgroundImage = "url('img/button_pushed.png')";
							
	var winner_h2 = document.getElementById("finalsWinningTeam");						
	winner_h2.innerHTML = "";
	
	var winningWestTeam = document.getElementById("west_slot");
	var winningEastTeam = document.getElementById("east_slot");
	
	winningWestTeam.style.boxShadow = "inset 0px 0px 10px rgba(0,0,0,1)";
	winningEastTeam.style.boxShadow = "inset 0px 0px 10px rgba(0,0,0,1)";
	
	winningEastTeam.className = winningEastTeam.className + " animate_slot";
	winningWestTeam.className = winningWestTeam.className + " animate_slot";
	
	var weightedEastTeams = new Array();
	var weightedWestTeams = new Array();
									
	var currentTeam = 0;				
	while (currentTeam<$scope.eastTeam.length){
		for( i=0; i<$scope.eastTeam[currentTeam].weight; i++){
			weightedEastTeams[weightedEastTeams.length]=$scope.eastTeam[currentTeam];}
		currentTeam++;		
	}
																		
	currentTeam = 0;
	while (currentTeam<$scope.westTeam.length){
		for( i=0; i<$scope.westTeam[currentTeam].weight; i++){
			weightedWestTeams[weightedWestTeams.length]=$scope.westTeam[currentTeam];}
		currentTeam++;		
	}
											
	var eastRandomNumber=Math.floor(Math.random()*weightedEastTeams.length);
	var westRandomNumber=Math.floor(Math.random()*weightedWestTeams.length);
	
	//Wait 3 seconds and then re-enable onClick event
	setTimeout(function(){
		document.getElementById('button').style.backgroundImage = "url('img/button.png')";
		document.getElementById('button').style.pointerEvents = 'auto';

		}, 3000); // Wait for 3 second.
		
};
				  
				  
*/