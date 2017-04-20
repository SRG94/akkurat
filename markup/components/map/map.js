function initMap() {
	var myLatLng = {lat: 41.312604, lng: 69.350355};

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementsByClassName('js-map')[0], {
	  center: myLatLng,
	  scrollwheel: false,
	  zoom: 17
	});

	// Create a marker and set its position.
	var marker = new google.maps.Marker({
	  map: map,
	  position: myLatLng,
	  title: 'Hello World!'
	});
}
google.maps.event.addDomListener(window, 'load', initMap);