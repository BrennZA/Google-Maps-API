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
        description: "The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex bordering present-day Giza in Greater Cairo, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.",
        image: "https://www.planetware.com/photos-large/EGY/egypt-cairo-pyramids-of-giza-and%20camels-2.jpg"
    },
    KarnakTemple = {
        position: { lat: 25.7188, lng: 32.6573 },
        title: "Karnak Temple",
        description: "The Karnak Temple Complex, commonly known as Karnak, comprises a vast mix of decayed temples, chapels, pylons, and other buildings near Luxor, in Egypt.",
        image: "https://www.planetware.com/photos-large/EGY/egypt-karnak-avenue-of-sphinxes.jpg"
    },
    ValleyOfTheKings = {
        position: { lat: 25.7402, lng: 32.6014 },
        title: "Valley of the Kings",
        description: "The Valley of the Kings, also known as the Valley of the Gates of the Kings, is a valley in Egypt where, for a period of nearly 500 years from the 16th to 11th century BC, rock-cut tombs were excavated for the pharaohs and powerful nobles of the New Kingdom.",
        image: "https://www.cleopatraegypttours.com/wp-content/uploads/2020/01/Valley-of-the-Kings.jpg"
    },
    AbuSimbel = {
        position: { lat: 22.3460, lng: 31.6156 },
        title: "Abu Simbel",
        description: "The Abu Simbel temples are two massive rock-cut temples at Abu Simbel, a village in Aswan Governorate, Upper Egypt, near the border with Sudan. They are situated on the western bank of Lake Nasser, about 230 km southwest of Aswan.",
        image: "https://res.cloudinary.com/https-www-isango-com/image/upload/f_auto/t_m_Prod/v7682/africa/egypt/aswan/18064.jpg"
    },
    Aswan = {
        position: { lat: 24.0889, lng: 32.8998 },
        title: "Aswan",
        description: "Aswan, a city on the Nile River, has been southern Egypt’s strategic and commercial gateway since antiquity. It contains significant archaeological sites like the Philae temple complex, on Agilkia Island near the landmark Aswan Dam. Philae’s ruins include the columned Temple of Isis, dating to the 4th century B.C. Downriver, Elephantine Island holds the Temple of Khnum, from the Third Dynasty.",
        image: "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/island-of-elephantine.jpg"
    },
    EgyptianMuseum = {
        position: { lat: 30.0476, lng: 31.2336 },
        title: "Egyptian Museum",
        description: "The Museum of Egyptian Antiquities, known commonly as the Egyptian Museum or Museum of Cairo, in Cairo, Egypt, is home to an extensive collection of ancient Egyptian antiquities. It has 120,000 items, with a representative amount on display, the remainder in storerooms.",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/9d/5f/f7.jpg"
    },
    Alexandria = {
        position: { lat: 31.2001, lng: 29.9187 },
        title: "Alexandria",
        description: "Alexandria is a Mediterranean port city in Egypt. During the Hellenistic period, it was home to a lighthouse ranking among the Seven Wonders of the Ancient World as well as a storied library. Today the library is reincarnated in the disc-shaped, ultramodern Bibliotheca Alexandrina. The city also has Greco-Roman landmarks, old-world cafes and sandy beaches. Its 15th-century seafront Qaitbay Citadel is now a museum.",
        image: "https://www.cleopatraegypttours.com/wp-content/uploads/2018/08/Alexandria-Egypt.jpg"
    },
    AbydosTemple = {
        position: { lat: 26.1851, lng: 31.9192 },
        title: "Abydos Temple",
        description: "Abydos is one of the oldest cities of ancient Egypt, and also of the eighth nome in Upper Egypt. It is located about 11 kilometres west of the Nile at latitude 26° 10' N, near the modern Egyptian towns of El Araba El Madfuna and El Balyana. In the ancient Egyptian language, the city was called Abdju.",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/bd/e3/1d.jpg"
    },
    Saqqara = {
        position: { lat: 29.8713, lng: 31.2164 },
        title: "Saqqara",
        description: "Saqqara, also spelled Sakkara or Saccara in English, is a vast, ancient burial ground in Egypt, serving as the necropolis for the ancient Egyptian capital, Memphis.",
        image: "https://i.pinimg.com/originals/bf/c8/ac/bfc8acdead8e474c6c2206dadc7c8438.jpg"
    }
];

icons = {
    capital: {
        url: "https://previews.dropbox.com/p/thumb/ABBD935b4ualZPN1r_mt7fqMS50enbJGucuJKA_y7wBbnuskdxPMjy-P9ZHzFRjgNkdMpSKptG9oO3YwFEYaBnhbpGgIwhg2AojacVGj48R6rRLLeIfbrPxsXC6WIRHYKrN1h4O4WPSSz8dh10uyXCFoZ_PS2VA0FiqtTslSSO9V2zTXRSVeDz61OwMMV4z07KZHf2BijWj7mHoNl-hBW8OcOL_4n02rsFrqUrGezyH1jLkZb_J3RE9urM7ZCB3lL_jnjBPmQ0pcIfH4ySY6ut8nX2SFvnIjUxRH96ly6TtQi3M-Q8eCRsaVRttTJLNpvq06AjInvC5wUWHgLiLPP1wnr4DfFf_DB18c9BAxeOoxVg/p.png?fv_content=true&size_mode=5",
        name: "Capital"
    },
    landmark: {
        url: "https://previews.dropbox.com/p/thumb/ABBYb8v4lCrLVzRHCm8sC6IqIdpVNrnDR8RDBo1OFBlhgLmISpB8QdJminaEczeeQ8pztA-7ldUT2ReHK-scdOQq61SaR-xdRE_URwMc8ll9jLCSQZWxSdBIh5ma1uJvKctCQwQlA81L74qIg7GY1qGyGtpOzop0InijGsIYLbIDzBEBhHwVfd7zyas0Vu0xw6oSA4cNlnTKb7gKRIyjRThyPUPQj3elGw6eHy0u07CVKERW9w5wySSQbbE3CMDOjaHk_GzNlVoEIUFoTHtQg6_8Zzpvh2HXoODVxKnyesSFgU-sSDaGJpidkjaieLUFTxnThm6HW83F8PCVnqnN5C3OZxpQNtrL0puPymNwNc0BSw/p.png?fv_content=true&size_mode=5",
        name: "Landmark"
    },
    markerClusterer: {
        url: "https://previews.dropbox.com/p/thumb/ABBYssJ5IMPRoJjl7mrUofwlVQGBfpaFfraH1WfTLo4qJzaUbSj3ickKBnEHfNv9YajIwzwrq7yXf5uuO7QmEWMsKX9HthAhff1lExnLuno3jmeSJvE-qPro7Lv8Ji9-SkNln1nPcCjnk3Auj2tfNPCnTuzOdUXrwmcu1UqWPz3rhr0EpxgnoOqYd9RBr1V6hM90AhszSYetQ2cK5PY8AvatKSvmklwABXTQCCkaEnVlnhomr-XKL8prPblMjYmFRt1WLS2Z3GT4PcG5irJMqmkACdyoZNMT_cvXGhYM1-jbS0xZBftnGzPCAmosBYpam7lr2gouvoK5xuO9qXmPHfgu4UPVS-_201rCsrcgmG-1tQ/p.png?fv_content=true&size_mode=5",
        name: "Cluster"
    } 
}

function initMap() {

    const map = new google.maps.Map(document.getElementById("map"), {
        center: capitalInfo[0].position,
        zoom: 5,
    });

    let infoWindow = new google.maps.InfoWindow({});

    const capitalMarker = new google.maps.Marker({
        position: capitalInfo[0].position,
        title: capitalInfo[0].title,
        icon: icons.capital.url,
        animation: google.maps.Animation.DROP,
        map: map,
    });
    capitalMarker.addListener("click", () => {
        infoWindow.close();
        infoWindow = new google.maps.InfoWindow({
            content: addInfoContainer(capitalInfo),
        });
        infoWindow.open(map, capitalMarker);
        closeWindow();
    });

    const landmarkMarkers = landmarksInfo.map((location) => {
        return new google.maps.Marker({
            position: location.position,
            title: location.title,
            icon: {
                url: icons.landmark.url,
            }
        });
    });
    for (let i = 0; i < landmarksInfo.length; i++) {
        landmarkMarkers[i].addListener("click", () => {
            infoWindow.close();
            infoWindow = new google.maps.InfoWindow({
                content: addInfoContainer(landmarksInfo[i]),
            })
            infoWindow.open(map, landmarkMarkers[i]);
            closeWindow();
        })
    }

    new MarkerClusterer(map, landmarkMarkers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });

    const legend = document.getElementById("legend");

    for(const key in icons) {
        const type = icons[key];
        const name = type.name;
        const icon = type.url;
        const div = document.createElement("div");
        div.innerHTML = `<img src=${icon}><span> - ${name}</span>`;
        legend.appendChild(div);
    }
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);

    // FUNCTIONS
    const addInfoContainer = function (info) {
        const infoContainer = document.createElement("div");
        if (info[0]) {
            infoContainer.innerHTML =
                `
                    <h3>${info[0].title}</h3>
                    <img src=${info[0].image}>
                    <p>${info[0].description}</p>
                `
        } else {
            infoContainer.innerHTML =
                `
                    <h3>${info.title}</h3>
                    <img src=${info.image}>
                    <p>${info.description}</p>
                `
        }
        infoContainer.classList.add("infoWindow");
        return infoContainer;
    }

    const closeWindow = function () {
        map.addListener("click", () => {
            if (infoWindow) {
                infoWindow.close();
            }
        })
    }
};