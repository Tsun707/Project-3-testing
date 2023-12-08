  function initMap(){
   var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 43.85756120394474, lng: 18.41114065957382},
      zoom: 7
    });
	
	var criticalcity = [
  [{lat: 43.85756120394474, lng: 18.41114065957382},  "Siege of Sarajevo-Sarajevo"],
  [{lat: 44.771982343048585, lng: 17.192773920708355},  "Republika Srpska-Banja Luka"],
  [{lat:  43.34404101163839, lng: 17.809738305686924},  "Federation of Bosnia and Herzegovina-Mostar"],
  ];
  
  var infoWindow = new google.map.InfoWindow();
  criticalcity.forEach(([position, title], i) => {
	  var marker = new google.map.Marker({
		  position,
		  map,
		  title: '${i + 1}. ${title}',
		  label: '${i + 1}',
		  optimized: false,
	  });
	  
	  marker.addListener("click", () =>{
		  infoWindow.close();
		  infoWindow.setContent(marker .getTitle());
		  infoWindow.open(marker.getMap(), marker);
	  });
  });
  }
 
  


google.maps.event.addDomListener(window, 'load', initMap);