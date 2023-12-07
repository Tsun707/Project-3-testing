  function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 43.85756120394474, lng: 18.41114065957382},
      zoom: 7
    });
}

google.maps.event.addDomListener(window, 'load', initMap);