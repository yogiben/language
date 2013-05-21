
module_1 = {

id:"module_1",
name: "Farm Yard Fun",
instructions: "Welcome to the Language Game!",
additionalInfo: "Press any key",

score:0,

prompt:true,
type:"listenImage",
arguments: {}

}



module_2 = {

id:"module_2",
name: "Farm Yard Fun",
instructions: "You're about to have fun,answering some questions",
additionalInfo: "Press any key",

score:0,

prompt:true,
type:"listenImage",
arguments: {}

}




//Round 2
module_11 = {

id:"module_11",
name: "Round 1",
instructions: "Round 2",
additionalInfo: "Press any key",

score:0,

prompt:true,
type:"listenImage",
arguments: {
roundStart:true
}

}

module_12 = {

id:"module_12",
name: "Farm Yard Fun",
instructions: "First Game",
additionalInfo: "Press any key",

score:0,

prompt:false,
type:"listenImage",
arguments: {
roundStart:false,
answer:'giraffe',
options: [['giraffe',true,'img/giraffe.jpg'],['duck',false,'img/duck.jpg']]

}

}


module_13 = {

id:"module_13",
name: "Farm Yard Fun",
instructions: "NNNNNNNNNN",
additionalInfo: "Press any key",

score:0,

prompt:false,
type:"listenImage",
arguments: {}

}





//Rounds
round_1 = {
	id:"round_1",
	name: "Guess the Picture",
	intstructions: "Listen to the translation and then click on the corresponding image",
	score: 0,
	
	type:"listenImage",
	
	modules: [module_1,module_2/*,module3, module 4, module 5*/]

}

round_2 = {
	id:"round_2",
	name: "Guess the Picture",
	intstructions: "Listen to the translation and then click on the corresponding image",
	score: 0,
	
	type:"listenImage",
	
	modules: [module_11,module_12,module_13/*,module3, module 4, module 5*/]

}



//Game

game = {

	rounds:[round_1,round_2/*,"round3","round4","round5","round6"*/],

	score: 0,
	
	startDate: new Date()

}



$(document).ready(function() {
do_game(game);


$('body').keyup(function(e){


//Controls
   if(e.keyCode == 32){
       // user has pressed space
       advance();
   }
});

});