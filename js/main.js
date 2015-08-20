var app = angular.module("myApp", []);

app.run(function($rootScope) {

});

app.controller('MainController', function($scope) {
  $scope.title = "2016 NBA FINALS SLOT PREDICATION";
  $scope.stats ="Statistics gathered from oddshark.com and vegasinsider.com as of 7/19/2015.";
  $scope.rights ="Images are all properties of the National Basketball Association";
  
  
});

var eastTeam =  [{ team:'Atlanta Hawks', weight:13, finals_weight: 9, pos: -2160, conf: 'east'},
					  { team:'Cleveland Cavaliers', weight:62, finals_weight: 134, pos: -360, conf: 'east'},
					  { team:'Chicago Bulls', weight:19, finals_weight: 18, pos: -1800, conf: 'east'},
					  { team:'Toronto Raptors', weight:7, finals_weight: 5, pos: -3600, conf: 'east'},
					  { team:'Washington Wizards', weight:9, finals_weight: 7, pos: -4680, conf: 'east'},
					  { team:'Milwaukee Bucks', weight:7, finals_weight: 6, pos: 0, conf: 'east'},
					  { team:'Boston Celtics', weight:3, finals_weight: 3, pos: -3240, conf: 'east'},
					  { team:'Brooklyn Nets', weight:2, finals_weight: 2, pos: -2880, conf: 'east'},
					  { team:'Indiana Pacers', weight:8, finals_weight: 7, pos: -3960, conf: 'east'},
					  { team:'Miami Heat', weight:21, finals_weight: 9, pos: -720, conf: 'east'},
					  { team:'Charlotte Hornets', weight:1, finals_weight: 1, pos: -5040, conf: 'east'},
					  { team:'Detroit Pistons', weight:2, finals_weight: 2, pos: -4320, conf: 'east'},
					  { team:'Orlando Magic', weight:2, finals_weight: 2, pos: -2520, conf: 'east'},
					  { team:'Philadelphia 76ers', weight:1, finals_weight: 1, pos: -1440, conf: 'east'},
					  { team:'New York Knicks', weight:2, finals_weight: 2, pos: -1080, conf: 'east'}];  
					  
var westTeam =  [{ team:'Golden State Warriors', weight:62, finals_weight: 54, pos: 0, conf: 'west'},
					  { team:'Houston Rockets', weight:15, finals_weight: 14, pos: -1800, conf: 'west'},
					  { team:'Los Angeles Clippers', weight:21, finals_weight: 23, pos: -3600, conf: 'west'},
					  { team:'Portland Trail Blazers', weight:3, finals_weight: 2, pos: -2880, conf: 'west'},
					  { team:'Memphis Grizzlies', weight:12, finals_weight: 12, pos: -4680, conf: 'west'},
					  { team:'San Antonio Spurs', weight:73, finals_weight: 88, pos: -1080, conf: 'west'},
					  { team:'Dallas Mavericks', weight:7, finals_weight: 7, pos: -4320, conf: 'west'},
					  { team:'New Orleans Pelicans', weight:10, finals_weight: 9, pos: -3240, conf: 'west'},
					  { team:'Oklahoma City Thunder', weight:46, finals_weight: 41, pos: -720, conf: 'west'},
					  { team:'Phoenix Suns', weight:2, finals_weight: 3, pos: -5040, conf: 'west'},
					  { team:'Utah Jazz', weight:2, finals_weight: 2, pos: -2520, conf: 'west'},
					  { team:'Denver Nuggets', weight:2, finals_weight: 2, pos: -3960, conf: 'west'},
					  { team:'Sacramento Kings', weight:1, finals_weight: 1, pos: -2160, conf: 'west'},
					  { team:'Los Angeles Lakers', weight:2, finals_weight: 2, pos: -1440, conf: 'west'},
					  { team:'Minnesota Timberwolves', weight:2, finals_weight: 2, pos: -360, conf: 'west'}];	
					  
					  				  
function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};	 
	
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
	while (currentTeam<eastTeam.length){
		for( i=0; i<eastTeam[currentTeam].weight; i++){
			weightedEastTeams[weightedEastTeams.length]=eastTeam[currentTeam];}
		currentTeam++;		
	}
																		
	currentTeam = 0;
	while (currentTeam<westTeam.length){
		for( i=0; i<westTeam[currentTeam].weight; i++){
			weightedWestTeams[weightedWestTeams.length]=westTeam[currentTeam];}
		currentTeam++;		
	}
											
	var eastRandomNumber=Math.floor(Math.random()*weightedEastTeams.length);
	var westRandomNumber=Math.floor(Math.random()*weightedWestTeams.length);
	
	Shuffle(weightedEastTeams);
	Shuffle(weightedWestTeams);
						
	var finalsTeams = [weightedEastTeams[eastRandomNumber], weightedWestTeams[westRandomNumber]];
	var weightedFinalsTeams = new Array();
									
	currentTeam = 0;				
	while (currentTeam<finalsTeams.length){
		for( i=0; i<finalsTeams[currentTeam].finals_weight; i++){
			weightedFinalsTeams[weightedFinalsTeams.length]=finalsTeams[currentTeam];}
		currentTeam++;		
	}
									
	var finalsRandomNumber=Math.floor(Math.random()*weightedFinalsTeams.length);
	
	Shuffle(weightedFinalsTeams);

	//Wait 3 seconds and then re-enable onClick event
	setTimeout(function(){
		winningWestTeam.style.backgroundPosition= '12px ' +weightedWestTeams[westRandomNumber].pos+'px';
	    winningEastTeam.style.backgroundPosition= '12px ' +weightedEastTeams[eastRandomNumber].pos+'px';
		
		winner_h2.innerHTML = weightedFinalsTeams[finalsRandomNumber].team+" 2016 World Champions!";
		if(weightedFinalsTeams[finalsRandomNumber].conf=='west')
		{
			winningWestTeam.style.boxShadow = "inset 0px 0px 50px rgba(255,215,0,1)";
		}
		else
		{
			winningEastTeam.style.boxShadow = "inset 0px 0px 50px rgba(255,215,0,1)";
		}
		
		var victory_audio = new Audio('audio/victory.mp3');
		victory_audio.play();
		document.getElementById('button').style.pointerEvents = 'auto';
		document.getElementById("east_slot").className = "slot";
		document.getElementById("west_slot").className = "slot";
		
		document.getElementById('button').style.backgroundImage = "url('img/button.png')";
		document.getElementById('button').style.pointerEvents = 'auto';
		}, 3000); // Wait for 3 second.
		
};		
	