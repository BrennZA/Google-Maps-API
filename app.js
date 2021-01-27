const capitalInfo = [
    Cairo = {
        position: { lat: 30.0444, lng: 31.2357 },
        title: "Cairo. Egypt",
    }
];

const landmarksInfo = [
    PyramidsOfGiza = {
        position: { lat: 29.9792, lng: 31.1342 },
        title: "Pyramids of Giza",
    },
    KarnakTemple = {
        position: { lat: 25.7188, lng: 32.6573 },
        title: "Karnak Temple",
    },
]

function initMap() {

    const map = new google.maps.Map(document.getElementById("map"), {
        center: capitalInfo[0].position,
        zoom: 5,
    });

    const capitalMarker = new google.maps.Marker({
        position: capitalInfo[0].position,
        title: capitalInfo[0].title,
        map: map,
    });

    // LABELS FOR LANDMARK MARKERS
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const landmarkMarkers = landmarksInfo.map((location, i) => {
        return new google.maps.Marker({
            position: location.position,
            label: labels[i % labels.length],
        });
    });

    new MarkerClusterer(map, landmarkMarkers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}