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
    ValleyOfTheKings = {
        position: { lat: 25.7402, lng: 32.6014 },
        title: "Valley of the Kings",
    },
    AbuSimbel = {
        position: { lat: 22.3460, lng: 31.6156 },
        title: "Abu Simbel",
    },
    Aswan = {
        position: { lat: 24.0889, lng: 32.8998 },
        title: "Aswan",
    },
    EgyptianMuseum = {
        position: { lat: 30.0476, lng: 31.2336 },
        title: "Egyptian Museum",
    },
    Alexandria = {
        position: { lat: 31.2001, lng: 29.9187 },
        title: "Alexandria",
    },
    AbydosTemple = {
        position: { lat: 26.1851, lng: 31.9192 },
        title: "Abydos Temple",
    },
    Saqqara = {
        position: { lat: 29.8713, lng: 31.2164 },
        title: "Saqqara",
    }
];

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

    const landmarkMarkers = landmarksInfo.map((location) => {
        return new google.maps.Marker({
            position: location.position,
            title: location.title,
            icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            }
        });
    });

    new MarkerClusterer(map, landmarkMarkers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}