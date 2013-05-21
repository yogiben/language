round="round_1";
module="module_1";



function do_game(game){
console.log('START OF GAME');
window.localStorage.setItem("question-number",0);

window.localStorage.setItem("score",0);

window.localStorage.setItem("rounds-in-game",game.rounds.length);

setRound('round_1');
do_round('round_1');


}


function do_round(round){

round = window[round];

console.log('Starting round '+round.name+'; Type: '+round.type);

}



function do_module(module){


console.log('        Starting Module '+module.id);

if (module.prompt){
do_prompt(module);
}
else
{
do_question(module);
}

}






//Get & Retrieve Data
function setRound(round){

resetModuleCount();

round = window[round];

window.localStorage.setItem("round",round.id);
console.log('    Setting Round '+round.id);

window.localStorage.setItem("modules-in-round",round.modules.length);
console.log('    There are '+round.modules.length+' modules in this round');

$('#round-index').html('Round '+getRoundNumber(round));


//Set first Module of that Round
round_id = round.id;
module_id = window[round_id].modules[0].id;

resetQuestionCount();
setModule(module_id);
}

function getRoundId(){
round_id = window.localStorage.getItem("round");
return round_id;
}

function getRoundNumber(){
round_number = getRoundId().split("_")[1];
return round_number;
}

function getRoundInteger(){
round_number = parseInt(getRoundId().split("_")[1]);
return round_number;
}



function setModule(module){

module = window[module];

window.localStorage.setItem("module",module.id);
console.log('        Setting Module '+module.id);

$('#module-index').html('Module '+getModuleNumber(module));

//Increase Question Count if not a prompt

countModulesInRound();

if (!module.prompt){

questionNumber = getQuestionInteger() + 1;

window.localStorage.setItem("question-number",questionNumber);
console.log('        Reached question '+questionNumber);

$('#question-index').html('Question '+questionNumber);
}

do_module(module);
}

function getModuleId(){
module_id = window.localStorage.getItem("module");
return module_id;
}

function getModuleNumber(){
module_number = getModuleId().split("_")[1];
return module_number;
}

function getModuleCount(){
module_count = parseInt(window.localStorage.getItem("module-count"));
return module_count;
}

function getModuleInteger(){
module_number = parseInt(getModuleId().split("_")[1]);
return module_number;
}

function isPrompt(){

module = getModuleId();
module = window[module];

if (module.prompt){
return true
}
else
{
return false
}

}

function resetQuestionCount(){
window.localStorage.setItem("question-number",0);
$('#question-index').html('');
}

function getQuestionNumber(){
question_number = window.localStorage.getItem("question-number");
return question_number;
}

function getQuestionInteger(){
question_number = parseInt(window.localStorage.getItem("question-number"));
return question_number;
}


function do_nextRound(){

if (!isLastRound()){

currentRoundNumber = getRoundInteger();
nextRoundNumber = currentRoundNumber + 1;

nextRoundId = 'round_'+nextRoundNumber;

setRound(nextRoundId);

animateRound();
}
else
{
console.log('END OF GAME');
console.log('------------');
resetGame(game);
}

};


function do_nextModule(){

currentModuleNumber = getModuleInteger();
nextModuleNumber = currentModuleNumber + 1;

nextModuleId = 'module_'+nextModuleNumber;

setModule(nextModuleId);


module = window[nextModuleId];
do_module(module);

animateModule();

}


function isQuestion(){
if (module.prompt == false){
return true
}
else
{
return false
}
}


function advance()
{
if (isLastModule()){
do_nextRound();
}
else
{
do_nextModule();
}
}

function isLastModule(){
if (window.localStorage.getItem("modules-in-round")==getModuleCount()){
return true;
}
else
{
return false;
}
}


function isLastRound(){
if (window.localStorage.getItem("rounds-in-game")==getRoundNumber()){
return true;
}
else
{
return false;
}
}

function resetGame(){
do_game(game);
}


function countModulesInRound(){
moduleCount = parseInt(window.localStorage.getItem("module-count"));
moduleCount = moduleCount + 1;
window.localStorage.setItem("module-count",moduleCount);

$('#count-index').html('Module '+moduleCount+' of Round '+getRoundNumber());
}

function resetModuleCount(){
window.localStorage.setItem("module-count",0);
}

function key_press(){

if (isPrompt()){
advance();
}

}




function updateScoreBy(points){
window.localStorage.setItem("score",points);
}

function getScoreNumber(){
score = window.localStorage.getItem("score");
return score;
}

function getScoreInteger(){
score = parseInt(window.localStorage.getItem("score"));
return score;
}



function correctAnswer(){
console.log("RIGHT");
updateScoreBy(100);
advance();
};

function getAvailableNumber(){
available = $('#score-index').attr('available');
return available;
}

function getAvailableInteger(){
return parseInt(getAvailableNumber());
}