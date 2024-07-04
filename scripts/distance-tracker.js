// Distance calculation feature
let distanceMode = false;
let distancePoints = [];
let distancePolyline;
let thumbtackOverlay;

function startDistanceMode() {
    distanceMode = true;
    distancePoints = [];
    map.on('click', onMapClick);
    document.getElementById('start-distance').style.display = 'none';
    document.getElementById('clear-distance').style.display = 'inline';
    clearThumbTacks();
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
    clearThumbTacks();
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

    const marker = L.marker(latlng, {icon: thumbtack, interactive: false}).addTo(thumbtackOverlay);
    
    // Remove 'latest' class from previous thumbtacks
    thumbtackOverlay.eachLayer(layer => {
        if (layer !== marker) {
            layer.getElement().classList.remove('thumbtack-latest');
        }
    });

    // Add 'latest' class to the new thumbtack
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

        // Convert distance to miles (assuming the original units are meters)
        let distanceMiles = totalDistance * 0.000621371;

        document.getElementById('distance-result').innerHTML = `Trail length: ${distanceMiles.toFixed(2)} miles`;
    } else {
        document.getElementById('distance-result').innerHTML = 'Click to place next point';
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('start-distance').addEventListener('click', startDistanceMode);
    document.getElementById('clear-distance').addEventListener('click', clearDistanceMode);
});

// Add this function to update thumbtack positions when the map moves
function updateThumbTacks() {
    thumbtackOverlay.eachLayer(function(layer) {
        const pos = map.latLngToLayerPoint(layer.getLatLng());
        L.DomUtil.setPosition(layer.getElement(), pos);
    });
}

// Call this function whenever the map moves or zooms
map.on('moveend', updateThumbTacks);
map.on('zoomend', updateThumbTacks);