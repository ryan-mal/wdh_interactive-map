// Distance calculation feature
let distanceMode = false;
let distancePoints = [];
let distancePolyline;
let thumbtackOverlay;

function startDistanceMode() {
	distanceMode = true;
	window.distanceMode = true;
	distancePoints = [];
	map.on('click', onMapClick);
	document.getElementById('start-distance').style.display = 'none';
	document.getElementById('clear-distance').style.display = 'inline';
	clearThumbTacks();
	disableMapInteractions();
}

function clearDistanceMode() {
	distanceMode = false;
	window.distanceMode = false;
	distancePoints = [];
	if (distancePolyline) {
		map.removeLayer(distancePolyline);
	}
	map.off('click', onMapClick);
	document.getElementById('start-distance').style.display = 'inline';
	document.getElementById('clear-distance').style.display = 'none';
	document.getElementById('distance-result').innerHTML = '';
	clearThumbTacks();
	enableMapInteractions();
}

function clearThumbTacks() {
	if (thumbtackOverlay) {
		map.removeLayer(thumbtackOverlay);
	}
	thumbtackOverlay = L.layerGroup().addTo(map);
}

function onMapClick(e) {
	if (distanceMode) {
		addThumbTack(e.latlng);
		distancePoints.push(e.latlng);
		updateDistance();
	}
}

function addThumbTack(latlng) {
	const thumbtack = L.divIcon({
		className: 'thumbtack',
		html: '<div class="thumbtack-inner"></div>',
		iconSize: [20, 20],
		iconAnchor: [10, 10]
	});

	const marker = L.marker(latlng, {
		icon: thumbtack,
		interactive: false
	}).addTo(thumbtackOverlay);

	thumbtackOverlay.eachLayer(layer => {
		if (layer !== marker) {
			layer.getElement().classList.remove('thumbtack-latest');
		}
	});

	marker.getElement().classList.add('thumbtack-latest');
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

		let distanceMiles = totalDistance * 0.000621371;

		document.getElementById('distance-result').innerHTML = `Trail length: ${distanceMiles.toFixed(2)} miles`;
	} else {
		document.getElementById('distance-result').innerHTML = 'Click to place next point';
	}
}

function updateThumbTacks() {
	thumbtackOverlay.eachLayer(function(layer) {
		const pos = map.latLngToLayerPoint(layer.getLatLng());
		L.DomUtil.setPosition(layer.getElement(), pos);
	});
}

function disableMapInteractions() {
	map.eachLayer(function (layer) {
		if (layer instanceof L.Marker || layer instanceof L.Polygon) {
			layer.options.oldInteractive = layer.options.interactive;
			layer.setInteractive(false);
			if (layer.closePopup) {
				layer.closePopup();
			}
			// Disable popups
			if (layer.unbindPopup) {
				layer.options.oldPopup = layer.getPopup();
				layer.unbindPopup();
			}

			// Add click event listener to polygons for distance measurement
			if (layer instanceof L.Polygon) {
				layer.on('click', onMapClick);
			}
		}
	});
}

function enableMapInteractions() {
	map.eachLayer(function (layer) {
		if (layer instanceof L.Marker || layer instanceof L.Polygon) {
			if (layer.options.hasOwnProperty('oldInteractive')) {
				layer.setInteractive(layer.options.oldInteractive);
				delete layer.options.oldInteractive;
			}
			// Re-enable popups
			if (layer.options.hasOwnProperty('oldPopup')) {
				layer.bindPopup(layer.options.oldPopup);
				delete layer.options.oldPopup;
			}

			// Remove click event listener from polygons
			if (layer instanceof L.Polygon) {
				layer.off('click', onMapClick);
			}
		}
	});
}

document.addEventListener('DOMContentLoaded', (event) => {
	document.getElementById('start-distance').addEventListener('click', startDistanceMode);
	document.getElementById('clear-distance').addEventListener('click', clearDistanceMode);
});

map.on('moveend', updateThumbTacks);
map.on('zoomend', updateThumbTacks);