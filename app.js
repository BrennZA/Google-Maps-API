const capitalInfo = [
    Cairo = {
        position: { lat: 30.0444, lng: 31.2357 },
        title: "Cairo. Egypt",
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
}