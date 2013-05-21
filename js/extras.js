var extras = [
['About this Map',62.186014,-45.703125,"http://bigblogmap.com/about","btb",'This project is based on the <a href="http://BigBlogMap.com/" target="_blank" title="Big Blog Map">Big Blog Map</a>, a project to geotag the best travel blogs. <br/><br /><a href="http://bigblogmap.com/your-map" target="_blank">Get your own map.</a>']
]

function loadExtras() {



        for (i = 0; i < extras.length; i++) { 
		
		
		
		
		
		 //CREATION 
		 
		   marker = new google.maps.Marker({
        position: new google.maps.LatLng(extras[i][lat], extras[i][lng]),
        map: map,
		title: extras[i][title],
		icon: 'icons/mushroom.png',
		shadow: new google.maps.MarkerImage(
                'icons/btbShadow.png',
                null, null, new google.maps.Point(16, 34)),
		animation: google.maps.Animation.DROP
      });
	  
	  /*Event CLICK*/
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
		  popup.close(map,marker);
		  
		  

		  //INFO Content
		  
		  var infoContentTitle = '<h2 class="content-title">'+extras[i][title]+'</h2>';
		  var infoContentBody = '<p class="content-extra">'+extras[i][5]+'</p>'

		  
		  
		  
		  
		
		  var infoContent = infoContentTitle +  infoContentBody
		  
          infowindow.setContent(infoContent);
          infowindow.open(map, marker);
        }
		})(marker, i));
		
		
		
	
	
		/*Event MOUSEOVER*/
	
		google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
        return function() {
		if (infowindow.getMap() != null) {
				}
			else {
			
			//POPUP Content
		  var popupContent = '<h3>' + extras[i][title]+'</h3>';
		  
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
	 
	 }