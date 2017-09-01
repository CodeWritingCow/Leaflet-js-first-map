var manhattan = [40.713, -74.006];
var palmToo = [40.7515, -73.9707];
var myLat = 0;
var myLong = 0;
var mySpot = [myLat, myLong];

var mymap = L.map('mapid');
// var mymap = L.map('mapid').setView(palmToo, 13);

/* Find user's location via the geolocation API
function getLocation() {
	navigator.geolocation.getCurrentPosition(function(position) {
		// var myLat = position.coords.latitude;
		// var myLong = position.coords.longitude;
		mySpot = [position.coords.latitude, position.coords.longitude];

		var	myDataPoint2 = L.marker(mySpot).addTo(mymap);
		myDataPoint2.bindPopup("This is your current location.");

		mymap.setView(mySpot, 7); // Set map center
	});
}
*/

// Add OpenStreetMap tile layer to map
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(mymap);

// More at http://leaflet-extras.github.io/leaflet-providers/preview/

// Add National Geographic tile layer to map
L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(mymap);


// Find user's location using Leaflet's locate method with the setView option
function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
}

// If Leaflet fails to find user's geolocation, show error message.
// Set map center to Palm Too coordinates.
function onLocationError(e) {
    alert(e.message);
    mymap.setView(palmToo, 7);
}

mymap.on('locationfound', onLocationFound);
mymap.on('locationerror', onLocationError);


// getLocation();
mymap.locate({setView: true, maxZoom: 7});


// Add marker for Palm Too, one of the best steakhouses in New York City!
var myDataPoint = L.marker(palmToo).addTo(mymap);
	myDataPoint.bindPopup("This is <strong>The Palm Too</strong> steakhouse.");