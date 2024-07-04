// Distance calculation feature
let distanceMode = false;
let distancePoints = [];
let distancePolyline;

function startDistanceMode() {
	distanceMode = true;
	distancePoints = [];
	map.on('click', onMapClick);
	document.getElementById('start-distance').style.display = 'none';
	document.getElementById('clear-distance').style.display = 'inline';
}

function clearDistanceMode() {
	distanceMode = false;
	distancePoints = [];
	if (distancePolyline) {
		map.removeLayer(distancePolyline);
	}
	map.off('click', onMapClick);
	document.getElementById('start-distance').style.display = 'inline';
	document.getElementById('clear-distance').style.display = 'none';
	document.getElementById('distance-result').innerHTML = '';
}

function onMapClick(e) {
	if (distanceMode) {
		distancePoints.push(e.latlng);
		updateDistance();
	}
}

function updateDistance() {
	if (distancePolyline) {
		map.removeLayer(distancePolyline);
	}

	if (distancePoints.length > 1) {
		distancePolyline = L.polyline(distancePoints, {
			color: '#ff3b3b',
			weight: 3,
			opacity: 0.8,
			className: 'noir-string-line'
		}).addTo(map);

		let totalDistance = 0;
		for (let i = 1; i < distancePoints.length; i++) {
			totalDistance += distancePoints[i - 1].distanceTo(distancePoints[i]);
		}

		// Convert distance to miles (assuming the original units are meters)
		let distanceMiles = totalDistance * 0.000621371;

		document.getElementById('distance-result').innerHTML = `Trail length: ${distanceMiles.toFixed(2)} miles`;
	}
}

document.addEventListener('DOMContentLoaded', (event) => {
	document.getElementById('start-distance').addEventListener('click', startDistanceMode);
	document.getElementById('clear-distance').addEventListener('click', clearDistanceMode);
});