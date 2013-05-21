
function textToTranslate(text){
text = text.replace(/\s/g, '%20');
return text;
}

function textToSpeach(text){
text = text.replace('%20', '+');
return text;
}



function translateSpeakText(){


language = getLanguage();
text = getText();

urlEnding = "com";


//Source & Target language can't both be English
if (language != "en"){
x = $.getJSON('https://www.googleapis.'+urlEnding+'/language/translate/v2?key=AIzaSyDrfb90K1a3s0RmzRieudCRV1b9_5gS6xM&q='+text+'&source=en&target='+language, 

	function(r){R = r;
				speakText(language,0,text,success(r.data.translations[0].translatedText));
})
}
else
{
speakText(language,0,text,success(text));
}

}


function generateTranslationSpeach(language,text){


x = $.getJSON('https://www.googleapis.com/language/translate/v2?key=AIzaSyDrfb90K1a3s0RmzRieudCRV1b9_5gS6xM&q='+text+'&source=en&target='+language, 

	function(r){R = r;
				speakText(language,0,text,success(r.data.translations[0].translatedText));

})

}


//For Floating Text
function generateTranslation(language,text){


x = $.getJSON('https://www.googleapis.com/language/translate/v2?key=AIzaSyDrfb90K1a3s0RmzRieudCRV1b9_5gS6xM&q='+text+'&source=en&target='+language, 

function(r){R = r;
setTranslation(r.data.translations[0].translatedText);
addRandomParagraph();

})


}




function createMessage(language,text){

createUrl(language,text);
}

/*
request = $.ajax({
  dataType: "json",
  url: "https://www.googleapis.com/language/translate/v2?key=AIzaSyDrfb90K1a3s0RmzRieudCRV1b9_5gS6xM&q=hello+world&source=en&target=de",
  success: success()
});
*/

function success(translation){
$('#invisible-input').val(translation);
console.log(translation);
setTranslation(translation);
stopLoader();
notification('clusterClick');
return translation;
}

function toggleOverlay(){
$('.overlay').toggleClass('expanded');
}

	
	
	
	
	
function speakText(language,i,text){


	text = $('#invisible-input').val();
	var iframeUrl = 'http://translate.google.com/translate_tts?tl='+language+'&q='+text;

	$('#iframe-container').addClass("iframe-loading");
	
	$('#iframe-container').addClass('expandedIframe');
	
	$('#social-tab').addClass('expandedSocialTab');
	
	$("#iframe-container").html('<iframe id="iframe" onload="iframeLoad()" src="'+iframeUrl+'" seamless></iframe>');
	
	$("#btn-close-link").attr("href",iframeUrl);
	
	$('.navbar').addClass('navbar-expanded');
	
	$('#blog-index').attr('active','1');
	
	var url = window.location.href;
	var hash = window.location.hash;
	var index_of_hash = url.indexOf(hash) || url.length;
	var x = url.substr(0, index_of_hash);
	

	};
	
	
	
	
	function setLanguage(language){
	$('#language-div').html(language.toLowerCase());
	console.log('setting language ' + language);
	
        for (i=0;i<languages.length;i++){
        
        if (languages[i][1] == language){
        
        languageName = languages[i][0];}
        }
        
        setLanguageName(languageName);
	
	}	
	
	function getLanguage(){
	return $('#language-div').html();
	}
	
	function setLanguageName(languageName){
	$('#language-name-div').html(languageName);
	$('#language-name-alert').html(languageName);
	console.log('setting language name' + languageName);
	}	
	
	function getLanguageName(){
	return $('#language-name-div').html();
	}
	
	
	
	
	function setUrl(url){
	
	if (url != ""){
	$('#url-div').html(language.toLowerCase());
	console.log('setting url ' + url);
	}
	}
	
	function getUrl(){
	return $('#url-div').html();
	}
	
	
	
	function setCountry(country){
	
	if (country != ""){
	$('#country-div').html(country.toLowerCase());
	console.log('setting country ' + country);
	}
	

	
	
	}
	
	function getCountry(){
	return $('#country-div').html();
	}
	
	function setFlag(){
	
	$('#flag-thumb').attr('src','img/flags/'+getCountry()+'.png');
	
	
	}

	
	
	
	
	function setText(text){
	$('#text-div').html(text);
	$('#false-input').val(text)
	console.log('setting text');
	}
	
	function getText(){
	return $('#text-div').html();
	}
	
	
	function setTranslation(translation){
	$('#translation-div').html(translation);
	}
	
	function getTranslation(){
	return $('#translation-div').html();
	}
	
	function closeInitial(){
	toggleOverlay();
	
	setLanguage('en');
	
	setText($('#initial-input').val());
	translateSpeakText();
	
	window.localStorage.setItem("first-run","false");
	}
	
$(document).ready(function() {

window.localStorage.setItem("first-run","true");


$('#false-input').bind('keyup', function () {
   console.log($('#false-input').val());
   setText($('#false-input').val());
});



$('#initial-input').keyup(function(e) {
	//alert(e.keyCode);
	if(e.keyCode == 13) {
		
		closeInitial();
		
	}
});



$(document).keyup(function(e) {
	//alert(e.keyCode);
	if(e.keyCode == 13 && (window.localStorage.getItem('first-run')=="false")) {
		
		translateSpeakText();
		
	}
});



toggleOverlay();


$('#initial-input').val(random);

setLanguage("es");

});

var code = (e.keyCode ? e.keyCode : e.which);
 if(code == 13) { //Enter keycode
   console.log('enter');
 }
	
	
function updateFlag(country){

$('#flag-thumb').attr('src','img/flags/'+country+'.png');

}
	
function startLoader(){
$('#loader').addClass('loading');
}

function stopLoader(){
$('#loader').removeClass('loading');
}


function addRandomParagraph(){

randomTexts = [
				"Festival loving, the summer is fine. Find a girl and drink some wine",
				"Yo you bitches"
				]

randomText = randomTexts[Math.round(Math.random()*randomTexts.length)];

count = $('#paragraph-count').attr('count')+1


font = 10+(Math.floor((Math.random()*20)+1))*5;
speed = 1+(Math.floor((Math.random()*5)+1))*5;

direction = 


$('#paragraph-count').attr('count',count);
$('#text-float').append('<p class="floating-paragraph" style="font-size:'+font+'px" animation="'+speed+'">'+randomText+'</p>');

}


function runParagraphs(){


repetition = 10;

for (i = 0; i<10;i++){
addRandomParagraph();
}


$( ".floating-paragraph" ).each(function() {
  
});
}


function getIcon(){

if (typeof langIcon[locations[i][4]] != 'undefined'){
icon = langIcon[locations[i][4]];
}
else{
icon = 'country';
}
return icon;
}


function setRandomLanguage(){
rnd = (Math.round(Math.random()*languages.length));
randomLanguage = languages[rnd][1];
randomLanguageName = languages[rnd][0];

setLanguage(randomLanguage);
setLanguageName(randomLanguageName);

translateSpeakText();
}