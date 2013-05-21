	function infoWindow(i,latLng){
	
	
	
		  var infoContentTitle = '<a title="Read this blog" onclick="initializeIframe(&quot;'+locations[i][url]+'&quot;,'+i+')"><h2 class="content-title">'+locations[i][title]+'</h2></a>';
		  var infoContentBody = '<p class="content-body">'+locations[i][description]+'</p>'
		  var infoContentPrompt = '<p class="content-propmt">Click <a  title="'+locations[i][title]+'" onclick="initializeIframe(&quot;'+locations[i][url]+'&quot;,'+i+')">here</a> to read it.</p>';
		
		
		
		
		  			//Author Url
		  if (locations[i][authorUrl] == " " || locations[i][authorUrl] == ""){
		  
		  
		  var infoContentFooter = '<p class="content-footer">by <span class="author-name">'+locations[i][author]+infoContentSocial+'</span></p>';
		  
		  }
		  else
		  {
		  var infoContentFooter = '<p class="content-footer">by <span class="author-name"><a title="'+locations[i][author]+'" target="_blank" href="'+locations[i][authorUrl]+'">'+locations[i][author]+'</a></span>'+infoContentSocial+'</p>';
		  }
		  
		  var infoContent = infoContentTitle +  infoContentBody + infoContentPrompt
		  
          infowindow.setContent(infoContent);
		  infowindow.setPosition(latLng);
		  infowindow.open(map);
		  
		  }


function iframeLoad() {

$('#iframe-container').removeClass("iframe-loading");

};



function initializeIframe(iframeUrl,i){

 
		  

	$('#iframe-container').addClass("iframe-loading");
	
	$('#iframe-container').addClass('expandedIframe');
	
	$('#social-tab').addClass('expandedSocialTab');
	
	
	$("#iframe-container").html('<iframe id="iframe" onload="iframeLoad()" src="'+iframeUrl+'" seamless></iframe>');
	
	$("#btn-close-link").attr("href",iframeUrl);
	
	$('.navbar').addClass('navbar-expanded');
	
	$('#blog-index').attr('value',i);
	
	$('#blog-index').attr('active','1');
	
	var url = window.location.href;
	var hash = window.location.hash;
	var index_of_hash = url.indexOf(hash) || url.length;
	var x = url.substr(0, index_of_hash);

	x = "http://travelsofadam.com/map/"
	
	var facebookUrl = "http://www.facebook.com/sharer/sharer.php?u="+locations[i][4];
	var twitterUrl = 'https://twitter.com/intent/tweet?url='+locations[i][4]+'&text='+locations[i][0]+'%20via%20@travelsofadam'
	var googleUrl = 'https://plus.google.com/share?url='+locations[i][4];
	
	$('#facebook-social-bar').attr('href',facebookUrl);
	$('#twitter-social-bar').attr('href',twitterUrl);
	$('#google-social-bar').attr('href',googleUrl);
	
	window.location.hash = i;
	

	};
	
	
	function closeIframe(){

	$('#iframe-container').removeClass('expandedIframe');

	
	
	$('.navbar').removeClass('navbar-expanded');
	
	$('#social-tab').removeClass('expandedSocialTab');
	
	$('#blog-index').attr('active','0');
	
	window.location.hash = "";
	
	setTimeout(function(){
	
	$('#iframe').remove();
	
	},500);

	};
	
	
	function forwardBlog(){
	
		var openCheck = $('#blog-index').attr('active');
	console.log(openCheck);
	if (openCheck == 0)
	{

	}
	else
	{

	var currentIndex = $('#blog-index').attr('value');
	var maxIndex = ($('#blog-index').attr('max')-1);
	
	if (currentIndex >= maxIndex) {
	currentIndex = 0;
	}
	else
	{
	currentIndex++
	};

	var iframeUrl = locations[(currentIndex)][url];
	
	$("#btn-close-link").attr("href",iframeUrl);
	
	$("#iframe").attr("src",iframeUrl);

	$('#blog-index').attr('value',currentIndex);
	
	window.location.hash = currentIndex;
	};
	
	}
	
	
	

	//Panoramio
	var panoramioLayer = new google.maps.panoramio.PanoramioLayer();
	
		function onPanoramio(){
		panoramioLayer.setMap(map);
		$('#photos-on').addClass('invisible');
		$('#photos-off').removeClass('invisible');
		
		$('#blog-index').attr('photos','1');
		}
		
		function offPanoramio(){
		panoramioLayer.setMap(null);
		
		$('#photos-on').removeClass('invisible');
		$('#photos-off').addClass('invisible');
		
		$('#blog-index').attr('photos','0');
		}

		
	
	
	
	
	//Animation
	
	$('#contribute-li').hover(($('#icon-contribute').addClass('icon-spin')), ($('#icon-contribute').removeClass('icon-spin')));
	
	
	//Keyboard shortcuts
	
	$(document).keyup(function(e) {

  if (e.keyCode == 27) { 

closeIframe();
  
  }  
	});
	

	
	
	$(document).keyup(function(p) {

  if (p.keyCode == 80) { 

if ($('#blog-index').attr('photos') == 0){
  
onPanoramio();
  }
  else
  {
  offPanoramio();
  }
  }  
	});
	
	
	
	//Hashtag
	$(window).bind('hashchange', function() {

	if ($('#blog-index').attr('firstRun') 	== 1 && $('#blog-index').attr('active') == 1 && window.location.hash == "") {

	closeIframe();
	}
	
	else{

	}
	
	$('#blog-index').attr('firstRun','1');
});


function panAndOpen(currentIndex){

	var setLat = locations[currentIndex][lat];
	var setLng = locations[currentIndex][lng];
	
	var latLng = new google.maps.LatLng(setLat, setLng); //Makes a latlng
	
	map.panTo(latLng);
	
		infoWindow(currentIndex,latLng);

}


function upperCase (str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}

function categoryButton (text) {
categoryCapitalised = upperCase(text);

$('#category-top').html(categoryCapitalised+'<span class="caret"></span>');
}


//RELOAD MAP WITH CATEGORY
function reloadMap(category){

initialZoom = map.getZoom();
initialLat = map.getCenter().lat()
initialLng = map.getCenter().lng()

if (category !=="all"){
var input = $('#blog-database').val();
var locations = $.csv.toArrays(input, csvOptions);

categories.length=0;
categories == [];

for (var i=0; i<locations.length; i++){
if (locations[i][3]==category){
categories.push(locations[i]);

}

}

}
else
{
var input = $('#blog-database').val();
var locations = $.csv.toArrays(input, csvOptions);

categories = locations;
}

 var mapOptions = {
		  zoom: initialZoom,
          center: new google.maps.LatLng(initialLat,initialLng),
		  
		  minZoom: 2,
		  panControl: false,

		  
          mapTypeId: google.maps.MapTypeId.ROADMAP,
		      panControl: false,
			  overviewMapControl: true}
		    
	  
        map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

		var markers = [];
        for (i = 0; i < categories.length; i++) {
		
		returnId(i);
		console.log(id);
		
		 //CREATION
		 
		 var rnd = Math.floor((Math.random()*3)+1);
		 
		   marker = new google.maps.Marker({
        position: new google.maps.LatLng(categories[i][lat], categories[i][lng]),
        map: map,
		title: categories[i][title],
		icon: 'icons/' + categories[i][3]+'.png',
		shadow: new google.maps.MarkerImage(
                'icons/' + categories[i][3]+'Shadow.png',
                null, null, new google.maps.Point(16, 34))
      });
	  
	  markers.push(marker);
		

		
		/*Event CLICK*/
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
		  popup.close(map,marker);
		  
		  		returnId(i);
				console.log(id);
		  
		  

		  //INFO Content
		  
		  var infoContentTitle = '<a title="Read this blog" onclick="initializeIframe(&quot;'+categories[i][url]+'&quot;,'+id+')"><h2 class="content-title">'+categories[i][title]+'</h2></a>';
		  var infoContentBody = '<p class="content-body">'+categories[i][description]+'</p>'

		  

		  
		  
		  var infoContentPrompt = '<p class="content-propmt">Click <a  title="'+categories[i][title]+'" onclick="initializeIframe(&quot;'+categories[i][url]+'&quot;,'+id+')">here</a> to read it.</p>';
		 
		  var infoContentSocial = '<span class="content-social"> - <a title="FB this mo fo" href="http://www.facebook.com/sharer/sharer.php?u=http://bigblogmap.com/#'+id+'" target="_blank"><i class="icon-facebook"></i></a>   <a title="Tweet this mo fo" href="https://twitter.com/share?url=&text=Travel%20Blogs%20presented%20Geographically%20@BigBlogMap.%20http://www.bigblogmap.com/%23'+id+'" target="_blank"><i class="icon-twitter"></i></a></span>'

			//Author Url
		  if (categories[i][authorUrl] == " " || categories[i][authorUrl] == ""){
		  
		  
		  var infoContentFooter = '<p class="content-footer">by <span class="author-name">'+categories[i][author]+infoContentSocial+'</span></p>';
		  
		  }
		  else
		  {
		  var infoContentFooter = '<p class="content-footer">by <span class="author-name"><a title="'+categories[i][author]+'" target="_blank" href="'+categories[i][authorUrl]+'">'+categories[i][author]+'</a></span>'+infoContentSocial+'</p>';
		  }
		  
		  
		  var infoContent = infoContentTitle +  infoContentBody + infoContentPrompt + infoContentFooter
		  
          infowindow.setContent(infoContent);
          infowindow.open(map, marker);
        }
		})(marker, i));
		
		//Listeners
				google.maps.event.addListener(marker, 'dblclick', (function(marker, i) {
        return function() {
		
				returnId(i);
				console.log(id);


		  var iframeUrl = categories[i][url]
		  
		  initializeIframe(iframeUrl,id);
		
        }
		})(marker, i));
		
		/*Event MOUSEOVER*/
	
		google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
        return function() {
		if (infowindow.getMap() != null) {
				}
			else {
			
			//POPUP Content
		  var popupContent = '<h3>' + categories[i][title]+'</h3>';
		  
          popup.setContent(popupContent);
          popup.open(map, marker);
        }
		}
		
		})(marker, i));
		
		
		/*Event MOUSEOut*/
	
		google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
        return function() {
		  popup.close(map,marker);

        }

		})(marker, i));
	
		  
        } //End FOR
		

		var markerCluster = new MarkerClusterer(map, markers, mcOptions);
		
		
		
		$('#blog-index').attr("max",(i-1));
		
		return markerCluster;
		
		}
		
		function returnId(i) {

		id = categories[i][8];

		return id;
		}
		
		
		
		
	function notification(type) {

contentBody = "";
contentHead = "";
contentPrompt = "";

//BOOK
if (type == "book"){

getBookUrl();

contentBody = 'Check out the <a href='+bookUrl+'" target="_blank">Lonely Planet Guide for '+bookLocation+'</a>';



setTimeout(function(){alertOpen()},1000);
setTimeout(function(){alertDim()},6000);
}

//ZOOM
else if (type == "clusterClick")
{

console.log('Cluster Click');

contentBody = 'There are multiple Blogs. Zoom in to see them.';


if (typeof(openTimer) !== 'undefined'){

clearTimeout(openTimer);

clearTimeout(dimTimer);

clearTimeout(closeTimer);
}

openTimer = setTimeout("alertOpen()",100);
dimTimer = setTimeout("alertDim()",2000);
closeTimer = setTimeout("alertClose()",5000);

}

//ZOOM
else if (type == "hint")
{
hints = ["Press <strong>(P)</strong> to turn photos on/off","Press <strong>(R)</srong> to go to a random blog","Filter blogs by clicking on the grey button in the top right",'Download the Big Blog Map <a href="https://chrome.google.com/webstore/detail/big-blog-map/deaoiobgkgfleinmjcbgkahdfnalgdkl?hl=en" target="_blank" title="Chrome Extension">Chrome Extension</a>']

random = Math.floor(Math.random()*(hints.length));

hint = hints[random];

contentBody = hint;
}




alertHead(contentHead);
alertBody(contentBody);


return dimTimer;
return closeTimer;
return openTimer;
}



function alertToggle(){
$('.alert').toggleClass('in');
$('.alert').removeClass('dim');
}

function alertClose(){
$('.alert').removeClass('in');
$('.alert').removeClass('dim');

//$('.alert').removeClass('fadeInUp');
//$('.alert').addClass('fadeOutDown');
}

function alertOpen(){
$('.alert').addClass('in');
$('.alert').removeClass('dim');

//$('.alert').removeClass('fadeOutUp');
//$('.alert').addClass('fadeInUp');
}

function alertHead(contentHead){
$('#alert-head').html(contentHead);
}

function alertBody(contentBody){
$('#alert-body').html(contentBody);
}


function alertDim(){
$('.alert').addClass('dim');
}