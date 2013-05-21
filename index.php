

<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>The Big Language Map</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" content="text/html;charset=utf-8">
	<meta name="description" content="The Big Language Map">
    <style>
      html, body, #map_canvas {
        margin: 0;
        padding: 0;
        height: 100%;
      }
    </style>
	
	<!--<link rel="icon" type="image/x-icon" href="img/favicon.ico" />-->
	
	<script src="js/jquery.js"></script>
	<script src="js/getData.js"></script>
	<script src="js/language.js"></script>
	
	  <script src="js/markerclusterer.js" type="text/javascript"></script>

	
	
	<link rel="stylesheet" href="bootstrap/css/bootstrap.css">
	<link rel="stylesheet" href="css/css.css">
	<link rel="stylesheet" href="css/infowindow.css">
	<link rel="stylesheet" href="css/display.css">
	
	<link rel="stylesheet" href="fontawesome/css/font-awesome.css">
	<link rel="stylesheet" href="animate/animate.css">
	
    <script src="https://maps.googleapis.com/maps/api/js?libraries=panoramio&sensor=false"></script>

	
	<script src="js/icons.js">
	</script>
	
	
	<script src="js/extras.js">
	</script>
	
	
	<script src="js/data.js"></script>	
	<script src="js/dictionaries.js"></script>	
	
	
	<script>
	  var csvOptions = {separator:"`"};
	  
	  var categories = [];
	  var mcOptions = {maxZoom: 8, zoomOnClick:true, title:"There are multiple blogs. Zoom in to read."};
	  
	</script>
	
   
	


	<script src="js/my.js"></script>
	
	
	<script>
	
	randoms = [];
	randoms = [
	
	"Chicken is tasty",
	"Let's build a sandcastle",
	"I'm watiting for Godot"
	
			];
			
	random = randoms[Math.floor(Math.random()*randoms.length)];
	
	</script>
	
  </head>
  <body>
 <!-- 
  <div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
-->

	<div class="overlay">
		<div id="input-container">
			<div class="overlay-inner">
				<h2>The Big Language Map lets you hear the whole world</h2>
				<input type="text" id="initial-input"></input> <a onclick="closeInitial()" id="initial-button" class="btn btn-success">Go</a>
				<p>Type something to get started or just <strong>press enter</strong></p>
			</div>
		</div>
		
		<div id="text-float">
			<p></p>
		
		</div>
		
	</div>



	<div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container" id="nav-bar-container">

	
		  <a class="brand" href="" ><img id="brand-image" alt="" src="img/logo.png"></img><span></span></a>
		
          <div class="nav-collapse collapse visible-desktop">
		  
            <ul class="nav">
			
			
			<input type="text" id="false-input"></input>
			
			<div id="loader">
				<a id="loader-play" onclick="translateSpeakText();" class="btn btn-success" href="#"><i class="icon-play"></i></a>
				<i id="loader-loader" class="icon-spinner icon-spin icon-large"></i>
			</div>
			
			
              <li class="">
                <a title data-original-title="Random Language (r)" data-toggle="tooltip" data-placement="bottom" onclick="randomLanguage();"><i class="icon-random"></i></a>
              </li>
			  <!--<li>
			  <a onclick="onPanoramio()" id="photos-on" data-toggle="tooltip" data-placement="bottom" title data-original-title="Turn photos on (p)" class=""><i class="icon-camera"></i></a>
			  <a onclick="offPanoramio()" id="photos-off" data-toggle="tooltip" data-placement="bottom" title data-original-title="Turn photos off (p)" class="invisible"><i class="icon-camera"></i></a>
			  </li>-->
				<div class="on-loaded addthis_toolbox addthis_default_style ">
				<!--
				<a href="https://twitter.com/share" class="twitter-share-button" data-url="" data-text="Travels of Adam Blog Map" data-via="travelsofadam">Tweet</a>
				<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
-->

				
				</div>


			  
            </ul>
          </div>

        </div>
      </div>
    </div>

<textarea style="display:none" id="blog-database" > <?php include 'data/countries5.csv'; ?></textarea>
<textarea style="display:none" id="language-database" > <?php include 'data/languages.csv'; ?></textarea>



  
    <div id="map_canvas"></div>
	
	
	

	
	<input id="invisible-input" ></input>
	
	<script>$('#invisible-input').val('hello girls');</script>

	
	<div id="language-div" class=""></div>
	<div id="language-name-div" class=""></div>
	<div id="country-div" class=""></div>
	<div id="url-div" class=""></div>
	<div id="text-div" class=""></div>
	<div id="translation-div" class=""></div>
	
	<div id="paragraph-count" class="" count="0"></div>
	
	<div id="iframe-container" class="iframe">
	
	
		
		
	</div>
	
<script src="js/functions.js"></script>


<div id="blog-index" value="0" max="1" active="0" firstRun="0" photos="0"></div>


<script>
/*
var random = Math.floor((Math.random()*4)+1);

if (random == 1){

var initialZoom = 5;
var initialLat = 13.969190363512578;
var initialLng = 113.55334727343755;
var locationName = "Southeast Asia";
}

else if (random == 2){

var initialZoom = 5;
var initialLat = 12.938118223864535;
var initialLng = -71.6871312421874;
var locationName = "Central America";
}

else if (random == 3){

var initialZoom = 6;
var initialLat = 41.247202318531876;
var initialLng = -6;
var locationName = "Southern Europe";
}

else if (random == 4){

var initialZoom = 4;
var initialLat = 37.996163;
var initialLng = -110.917969;
var locationName = "North America";
}
*/

var initialZoom = 2;
var initialLat = 34.327960895575146;
var initialLng = 8.54602305468755;
var locationName = "the Travels of Adam Blog Map";
	


</script>



 <script>
      var map;
      function initialize() {
	  

		
		
	  
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
        for (i = 0; i < locations.length; i++) {
		
		
		
		 //CREATION
		 
		 var icon = getIcon();
		 
		 var rnd = Math.floor((Math.random()*3)+1);
		 
		   marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][lat], locations[i][lng]),
        map: map,
		title: locations[i][title],
		icon: 'icons/' +icon+'.png',
		//icon: 'icons/icon.png',
		shadow: new google.maps.MarkerImage(
                'icons/' + locations[i][3]+'Shadow.png',
                null, null, new google.maps.Point(16, 34))
      });
	  
	  markers.push(marker);
		

		
		/*Event CLICK*/
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
		  popup.close(map,marker);
		  
		   setLanguage(locations[i][4]);
		   
		   setCountry(locations[i][6].toLowerCase());
		   
		  

		   setFlag();
		   
		   startLoader();
		   
		   
		   setUrl(locations[i][7]);
		   
		   
		   translateSpeakText();
		   
		   infowindow.close();

		  //INFO Content
		  
		  
		  /*
		  var infoContentTitle = '<a title="Read this blog" onclick="translateSpeakText(&quot;'+locations[i][url]+'&quot;,&quot; '+text+'&quot;)"><h2 class="content-title">'+locations[i][title]+'</h2></a>';
		  var infoContentBody = '<p class="content-body">'+locations[i][description]+'</p>'

		  var infoContentPrompt = '<p class="content-propmt">Click <a  title="'+locations[i][title]+'" onclick="translateSpeakText("'+locations[i][url]+'","'+text+'")">here</a> to read it.</p>';

		  var infoContentFooter = '<p class="content-footer">by <span class="author-name"><a title="The Art of Backpacking on Twitter" target="_blank" href="http://twitter.com/artofbackpackin">Art of Backpacking</a></span></p>';

		  var infoContent = infoContentTitle +  infoContentBody + infoContentPrompt
          infowindow.setContent(infoContent);
          infowindow.open(map, marker);*/
        }
		})(marker, i));
		
		
		/*
		//Listeners
		google.maps.event.addListener(marker, 'dblclick', (function(marker, i) {
        return function() {

		  var iframeUrl = locations[i][url];
		  translateSpeakText(iframeUrl,text);
		  setLanguage(locations[i][url]);
		  translateSpeakText();
		
        }
		})(marker, i));
		*/
		
		/*Event MOUSEOVER*/
	
		google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
        return function() {
		if (infowindow.getMap() != null) {
				}
			else {
			
			//POPUP Content
		  var popupContent = '<h3>' + locations[i][NAME]+'</h3>'+'<h4>' + locations[i][LANGUAGE_NAME]+'</h4>';
		  
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
	
		
      }  //End initialise
	  
	  


//Defaults
var contentString = "<h2>Click on a country to hear that language";
	
var popupContent = 'Travel Blog';



var infowindow = new google.maps.InfoWindow({
    content: contentString
});



var popup = new google.maps.InfoWindow({
    content: popupContent
});


      google.maps.event.addDomListener(window, 'load', initialize);
	  


    </script>
	

<script id="reload-variables">
</script>

<script type="text/javascript">
  
 var input = $('#blog-database').val();
 var locations = $.csv.toArrays(input, csvOptions);
 
 var input = $('#language-database').val();
 var languages = $.csv.toArrays(input, csvOptions);
 
 
function openHash() {if (window.location.hash !== "") {

	
	var currentIndex = window.location.hash;
    
	currentIndex = currentIndex.replace(/#/g, "");

	var setLat = locations[currentIndex][lat];
	var setLng = locations[currentIndex][lng];
	
	var latLng = new google.maps.LatLng(setLat, setLng); //Makes a latlng
	
	
		infoWindow(currentIndex,latLng);
}
else
{
welcomeMessage();
}
} 

function welcomeMessage(){

	
	var latLng = map.getCenter();

	var contentString = "<h2>Backpacking is about simplicity. It�s cutting the unnecessary and going for what really counts; experience and adventure. It�s not only a way to travel, it�s a lifestyle. Backpackers are adrenaline junkies always seeking adventure in every part of the world. For many backpackers, they�ve quit their daily routine at home and went to travel the world from months to years or more.";

	new google.maps.InfoWindow({
		content: contentString
	});

	infowindow.setPosition(latLng);
	
	infowindow.open(map)

}

function pageLoaded() {

$('body').addClass('loaded');

}

function pageLoaded2() {

$('body').addClass('loaded-2');

}


			setTimeout(function(){openHash()},3000);
			setTimeout(function(){openHash()},3010);
			setTimeout(function(){loadExtras()},3000);
			
			setTimeout(function(){pageLoaded()},5000);
			setTimeout(function(){pageLoaded2()},7000);



</script>

<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' type='text/css'>

	<script src="js/modal.js"></script>
	<script src="js/transition.js"></script>
	<!--<script src="js/tooltip.js"></script>-->
	<script src="js/dropdown.js"></script>
	 
    <a id="button-modal" href="#bigblogmap-modal" role="button" class="btn btn-primary" data-toggle="modal">Get a Map</a>
   
   <div id="bigblogmap-modal" class="modal hide fade" tabindex="-1" role="dialog">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    <h3>About the Map</h3>
  </div>
  <div class="modal-body">
	<p>This map was built with <a href="maps.google.com" target="_blank">Google Map</a> & <a href="translate.google.com" target="_blank">Google Translate</a>. It's a fun(?) tool for discovering and comparing languages.
	<br/>
	<a id="bigblogmap-screenshot" href="http://bigblogmap.com" target="_blank" title="The Big Blog Map"><img alt="Big Blog Map Screenshot" id="modal-screenshot" src="http://bigblogmap.com/img/bigblogmapscreenshot.png"></img></a>
	<p>This map is developed on the <a href="http://bigblogmap.com" target="_blank" title="The Big Blog Map">Big Blog Map</a> platform, a project trying to Geo-tag the world's best travel blogs.
	<br /><p>Do you want your own map? Click <a href="http://bigblogmap.com/your-map" target="_blank" title="Get your own map">here</a>.
	</p>
  </div>
  <div class="modal-footer">
	<a href="http://bigblogmap.com/about" title="About Page" class="btn">Read more</a>
    <a href="" class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Ok</a>
  </div>
</div>


<!--Alert-->
<div id="alert" class="alert animated alert-block fade visible-desktop">
	<button onclick="alertClose()" type="button" class="close">&times;</button>
	<h4 id="alert-heading" class="alert-heading"><img id="flag-thumb" src="img/flags/gb.png" ></img> <span id="language-name-alert">Translation</span></h4>
	
	<p id="alert-body"></p>
	<p>
	  <span id="alert-prompt"></span>
	</p>
</div>




   

  </body>
</html>
