
//Prompt
function do_prompt(module){
console.log('        MAKING QUESTION');


if (module.arguments.roundStart){
alert('great');
$('#text-float').addClass('roundStart');
}
else{
$('#text-float').removeClass('roundStart');
}


	htmlDelay=setTimeout(function(){
	
	
	$('#prompt-1').html('<h1>'+'Prompt! '+module.instructions+'</h1>');
	$('#prompt-2').html('<p>'+module.additionalInfo+'</p>');
	
	
	},500);
}

//Do Question
function do_question(module){

available = 100;

console.log('        MAKING QUESTION');
console.log('            Available score: '+available);

$('#score-index').attr('available',available)

	htmlDelay=setTimeout(function(){
	
	
	
	
	//Set Up based on 'type' of question
	
	emptyContent();
	
	
	if (module.type == 'listenImage'){
	
	images = '<img class="wrong" src="'+module.arguments.options[0][2]+'"</img>';
	images = images + '<img class="correct" src="'+module.arguments.options[1][2]+'"</img>';
	
	console.log(images);
	
	$('#content-area-1').html(images);
	
	$('#prompt-1').html('<h1>'+'Question: '+module.instructions+'</h1>');
	$('#prompt-2').html('<p>'+module.additionalInfo+'</p>');
	
	}
	
	

	},500);
};




function bindAnswers(){
$('.wrong').bind('click', function() {

wrongAnswer();

});


$('.correct').bind('click', function() {

correctAnswer();

});
}





function emptyContent(){
}








function animateModule(){
if ($('#animated-index').attr('animated')=="false"){
$('#animated-index').attr('animated','true');

$('.overlay').removeClass('animated bounceInRight');
$('.overlay').addClass('animated bounceOutLeft');

myVar=setTimeout(function(){

$('.overlay').removeClass('animated bounceOutLeft');
$('.overlay').addClass('animated bounceInRight');

$('#animated-index').attr('animated','false');
},500);
}
}

function animateRound(){
$('.overlay').removeClass('animated bounceInDown');
$('.overlay').addClass('animated hinge');

myVar=setTimeout(function(){

$('.overlay').removeClass('animated hinge');
$('.overlay').addClass('animated bounceInDown');

},500);
}