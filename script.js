window.onload = function(){

	initDices();
	initSnails();

};

function sound(){
	var groan = new Audio();
	groan.src= "assets/sound/yuck2.mp3" ;
	groan.play();
	
}


//récupère les images des faces du dé
function getDicesConfig(){

	var diceImgOrange = "assets/images/dice-orange.png";
	var diceImgYellow = "assets/images/dice-yellow.png";
	var diceImgRed = "assets/images/dice-red.png";
	var diceImgBlue = "assets/images/dice-blue.png";
	var diceImgGreen = "assets/images/dice-green.png";
	var diceImgPurple = "assets/images/dice-purple.png";
//leur attribut une variable dans un tableau
	var dicesConfig = [
			[ 'orange', diceImgOrange ],
			[ 'yellow', diceImgYellow ],
			[ 'red', diceImgRed ],
			[ 'blue', diceImgBlue ],
			[ 'green', diceImgGreen ],
			[ 'purple', diceImgPurple ]
		]

	return dicesConfig;

}
//repositionne les pions tout à gauche de la page
function repositionSnails(){

	document.getElementById("snail-blue").style.left = '0px';
	document.getElementById("snail-orange").style.left = '0px';
	document.getElementById("snail-purple").style.left = '0px';
	document.getElementById("snail-yellow").style.left = '0px';
	document.getElementById("snail-green").style.left = '0px';
	document.getElementById("snail-red").style.left = '0px';

}

// on affiche les dés pour le départ
function initDices(){

	  document.getElementById("dice-one").src = "assets/images/dice.png";
	  document.getElementById("dice-two").src = "assets/images/dice.png";

	  document.getElementById("dice-one").style.display = 'block';
	  document.getElementById("dice-two").style.display = 'block';

}

// récupération de la position des escargots
function getSnailsPosition(){

	var SnailPositionOrange = document.getElementById("snail-orange").offsetLeft;
	var SnailPositionPurple = document.getElementById("snail-purple").offsetLeft;
	var SnailPositionYellow = document.getElementById("snail-yellow").offsetLeft;
	var SnailPositionRed = document.getElementById("snail-red").offsetLeft;
	var SnailPositionBlue = document.getElementById("snail-blue").offsetLeft;
	var SnailPositionGreen = document.getElementById("snail-green").offsetLeft;
//et leur attribut une variable qui sera modifiée si les dés tombent sur leur couleur
	var positions = [
			[ 'orange', SnailPositionOrange ],
			[ 'yellow', SnailPositionYellow ],
			[ 'red', SnailPositionRed ],
			[ 'blue', SnailPositionBlue ],
			[ 'green', SnailPositionGreen ],
			[ 'purple', SnailPositionPurple ]
		]

	return positions;

}

// on affiche les escargots sur la ligne de départ
function initSnails(){

	document.getElementById("snail-blue").src = "assets/images/zombiegymto.png";
	document.getElementById("snail-orange").src = "assets/images/zombieegypt.png";
	document.getElementById("snail-purple").src = "assets/images/zombielover.png";
	document.getElementById("snail-yellow").src = "assets/images/zombieknight.png";
	document.getElementById("snail-green").src = "assets/images/zombiesamurai.png";
	document.getElementById("snail-red").src = "assets/images/zombiebunny.png";

	document.getElementById("snail-blue").style.display =  'block';
	document.getElementById("snail-orange").style.display =  'block';
	document.getElementById("snail-purple").style.display =  'block';
	document.getElementById("snail-yellow").style.display =  'block';
	document.getElementById("snail-green").style.display =  'block';
	document.getElementById("snail-red").style.display =  'block';

}

// Lancement des dés //
function roll() {

	// on récupère les images et les couleurs qui vont avec
    var dices = getDicesConfig();

	// -------- Lancer du dé N°1
	var launchOne = Math.floor(Math.random() * dices.length);
	//on récupère la couleur du nouveau dé
	var colorOne = dices[launchOne][0];
	// on affiche l'image du nouveau dé
	document.getElementById("dice-one").src = dices[launchOne][1];

	// -------- Lancer du dé N°2
	var launchTwo = Math.floor(Math.random() * dices.length);
	var colorTwo = dices[launchTwo][0];
	document.getElementById("dice-two").src = dices[launchTwo][1];

	// appelle fonction pour faire avancer les escargots
	moveSnails(colorOne, colorTwo);

}

function moveSnails(firstColor, secondColor){

	var maxMovement = 800; //si un roll fait avancer un pion au delà de 800px déclenche la condition win 

	// déplacement du premier lancer
	var snailsPositions = getSnailsPosition();
	for ( let i = 0; i < snailsPositions.length; i++ ){

		if ( snailsPositions[i][0] == firstColor ){

			var NewPositionLeft = snailsPositions[i][1] + 130; //les pions bougent de 130 pixels si leur couleur tombe après le roll
			document.getElementById("snail-"+snailsPositions[i][0]).style.left = NewPositionLeft+'px';
			if ( NewPositionLeft >= maxMovement ) { gameWin(snailsPositions[i][0]); exit; }

		}
	}

		// déplacement du deuxieme lancer
	var snailsPositions = getSnailsPosition();
	for ( let i = 0; i < snailsPositions.length; i++ ){

		if ( snailsPositions[i][0] == secondColor ){

			var NewPositionLeft = snailsPositions[i][1] + 120;
			document.getElementById("snail-"+snailsPositions[i][0]).style.left = NewPositionLeft+'px';
			if ( NewPositionLeft >= maxMovement ) gameWin(snailsPositions[i][0]);

		}
	}

}
	function gameWin(winner){
	sound()
	alert('Le zombie '+ winner + ' gagne !');
	resetGame();


}

function resetGame(){

	initDices();
	initSnails();
	repositionSnails();
	sound();

}
