const capitalInfo = [
    Cairo = {
        position: { lat: 30.0444, lng: 31.2357 },
        title: "Cairo. Egypt",
        description: "Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts. Nearby, Giza is the site of the iconic pyramids and Great Sphinx, dating to the 26th century BC. In Gezira Island’s leafy Zamalek district, 187m Cairo Tower affords panoramic city views.",
        image: "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/egypt-cairo.jpg"
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

    let infoWindow = new google.maps.InfoWindow({});

    const capitalMarker = new google.maps.Marker({
        position: capitalInfo[0].position,
        title: capitalInfo[0].title,
        map: map,
    });
    capitalMarker.addListener("click", () => {
        infoWindow = new google.maps.InfoWindow({
            content: addInfoContainer(capitalInfo),
        });
        infoWindow.open(map, capitalMarker);
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

    // FUNCTIONS
    const addInfoContainer = function (info) {
        const infoContainer = document.createElement("div");
        infoContainer.innerHTML = `
            <h3>${info[0].title}</h3>
            <img src=${info[0].image}>
            <p>${info[0].description}</p>
        `
        infoContainer.classList.add("infoWindow");
        return infoContainer;
    }
};