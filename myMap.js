var manhattan = [40.713, -74.006];
var palmToo = [40.7515, -73.9707];
var myLat = 0;
var myLong = 0;
var mySpot = [myLat, myLong];

var mymap = L.map('mapid').setView(palmToo, 13);


function getLocation() {
	navigator.geolocation.getCurrentPosition(function(position) {
		// var myLat = position.coords.latitude;
		// var myLong = position.coords.longitude;
		mySpot = [position.coords.latitude, position.coords.longitude];

		var	myDataPoint2 = L.marker(mySpot).addTo(mymap);
		myDataPoint2.bindPopup("This is your current location.");
	});
}


// Add OpenStreetMap tile layer to map
// More at http://leaflet-extras.github.io/leaflet-providers/preview/

// Add OpenStreetMap tile layer to map
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(mymap);

// Add National Geographic tile layer to map
L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(mymap);

getLocation();

// Add marker for Palm Too, one of the best steakhouses in New York City!
var myDataPoint = L.marker(palmToo).addTo(mymap);
	myDataPoint.bindPopup("This is <strong>The Palm Too</strong> steakhouse.");