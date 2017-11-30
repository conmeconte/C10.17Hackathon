
$(document).ready(init);

//map variables
var map;
var fenway;
var panorama;

//music variables
var player;
var vidID;

var locationObj=[

    {id: 1, name: "London", location: [51.5005803,-0.1258119], youTubeId:'CMXxG9A1nzE', trivia: [
        "This is the largest city in Europe.",
        "The world's first public zoo first opened here in 1829.",
        "This city is the first to host the Olympics three times (1908, 1948 and 2012).",
        "The famous 221B Baker St. address is actually located at 187 North Gower St.",
        "One of the most famous bands in the world played their last gig on the roof of Apple Corps."]},
    {id: 2, name: "Istanbul", location: [41.0081056,28.9810191], youTubeId:'8C5NLfYdZaE', trivia: "This is the only city in the world to straddle two continents: Asia and Europe."},
    {id: 3, name: "Venice", location: [45.4384184,12.3359239], youTubeId:'mOgFS6AYoVc', trivia: "This city is made up of 118 islands."},
    {id: 4, name: "New York", location: [40.7536533,-73.9806382], youTubeId:'b07Z_qfchFk', trivia: "15,152 forms of life have been found in the city's train system (including insects and bacteria)."},
    {id: 5, name: "Tokyo", location: [35.7141231,139.7966704], youTubeId:'Q_w4DVgvVHs', trivia: "With a population of 26.5 million, this city is the largest in the world in terms of total population size."},
    {id: 6, name: "Las Vegas", location: [36.1126258,-115.1767051], youTubeId:'ZwbEuzJCnqI', trivia: "Michael Jackson had plans to build a 50 foot tall moon walking robot replica of himself to roam the desert of this city. It was intended to be an advertisement for a planned 2005 comeback."},
    {id: 7, name: "Cairo", location: [29.9778574,31.1287904], youTubeId:'at7xLnfubFY', trivia: [
        "This city's name means 'Vanquisher', supposedly because Mars was rising at the time it was founded.",
        "With an estimated population of 22 million, this is the largest city in Africa and the Middle East.",
        "This city is home to the only remaining ancient 7 Wonders of the World.",
        "In this city, Sunday is the first day of week and the weekend is Friday and Saturday.",
        "There are two large islands in the middle of this city."]},
    {id: 8, name: "Beirut", location: [33.8969085,35.5023606], youTubeId:'PSbj2Mx2By8', trivia: "There are 15 rivers in the country this city is in (all of them coming from its own mountains), and despite surrounding deserts, this country has none."},
    {id: 9, name: "Moscow", location: [55.7530756,37.62217], youTubeId:'6lRuXckWC_8', trivia: [
        "This city boasts the largest number of billionaires in the world.",
        "The highest tower in Europe with an overall height of 540 m is located here.",
        "It's common to see stray dogs riding the metro into the city in search of food here.",
        "The world’s largest medieval fortress can be found here."]},
    {id: 10, name: "Berlin", location: [52.5163767,13.3788291], youTubeId:'H95y-F2kgoQ', trivia: [
        "While in this city, JKF proclaimed that he was a 'jelly donut'.",
        "This is the only city in the world with three active opera houses.",
        "The longest open air gallery in the world is located here.",
        "This city is nine times bigger than Paris.",
        "This city has more bridges than Venice, but the city is also much bigger than the tiny Italian island."]},
    {id: 11, name: "Prague", location: [50.0875638,14.4212062], youTubeId:'YnzgdBAKyJo', trivia: [
        "This city has a graffiti wall devoted to John Lennon even though he never visited the country.",
        "The Dancing House was inspired by Fred Astaire and Ginger Rogers.",
        "The locals drink more beer per capita than any other country in the world.",
        "The very first book about Mozart was published here.",
        "The Rolling Stones paid $32,000 to light up a monument in this city - a sight many tourist continue to enjoy to this day."]},
    {id: 12, name: "Havana", location: [23.1401843,-82.3508177], youTubeId:'QNYlNmWfnxo', trivia: "Singer Gloria Estefan was born here."},
    {id: 13, name: "Shanghai", location: [31.239481,121.4998016], youTubeId:'DeumyOzKqgI', trivia: "This city has the second tallest building in the world, standing at 2,073 feet."},
    {id: 14, name: "Rio De Janeiro", location: [-22.9522173,-43.2102183], youTubeId:'3gDboKGn-Sw', trivia: [
        "This city is named after a river that doesn't exist and means January River.",
        "One of its most famous landmarks has been labeled one of the world's New 7 Wonders of the World.",
        "This city hosts the largest carnival celebration in the world!",
        "For five days a year, the city is run by a mythical jester named King Momo."]},
    {id: 15, name: "Sydney", location: [-33.8590761,151.2221537], youTubeId:'hJzotJUlQws', trivia: [
        "This city has the widest long-span bridge and tallest steel arch bridge in the world.",
        "One of this city's landmark's is known by the locals as 'The Coat Hanger' due to its distinct shape.",
        "Cricket and rugby are the most popular sports here."]}
];

//music added will need to be called later.  player.loadVideoByID(locationObj.youTubeId);

var villains = [
    {name: "Auric Goldfinger",
    photo: "img/a_Goldfinger.jpg",
    trivia: ["Claims to be an expert pistol shot that never misses",
    "Is a Jeweller and Smuggler",
    "Has a manservant named Oddjob"]
    },
    {name: "Alec Trevelyan",
    photo: "img/Alec_Trevelyan.jpg",
    trivia: ["Formerly agent 006 of MI6",
    "Also known as Janus",]
    },
    {name: "Raoul Silva",
    photo: "img/raoul_silva.png",
    trivia: ["Former partner of Olivia Mansfield (M)",
    "Cyber-terrorist",
    "Captured, tortured, and imprisoned by the Chinese"]
    }
];

var crimes = [" has stolen the GoldenEye satellite and intends to erase the Bank of England's financial records, destroying the British economy in the process.",
              " is planning to contaminate the water supply at Fort Knox, killing everyone and then stealing 15 billion in gold bullion.",
              " has hacked into MI6's database and plans to put all agents in danger by releasing their real identities to the world."];

function init(){
    createLocationButton(locationObj);

};

function randomizer(arr){
    var random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}

function villainTriviarandomizer(randomizer){


}

/*Inputs the locationObj and uses jquery dom creation to create buttons on the document.
Each button created contains the specific location object with its properties such as location coordinate*/

function createLocationButton(locations){

    for(var location_i=0; location_i<locations.length; location_i++){
        var buttonElem=$('<button>').addClass("btn btn-primary");
        var place=locations[location_i];
        place.domElement=buttonElem;
        buttonElem.text(locations[location_i].name);
        buttonElem.on('click',moveLocationsOnClick.bind(place));
        $('.locationBtns').append(buttonElem);
    }


}

/*on clicking a location button it centers the map to the lat & lng that the button's obj possess.*/
function moveLocationsOnClick(){
    map.setCenter({lat:  this.location[0], lng: this.location[1]});
    map.streetView.setPosition({lat:  this.location[0], lng: this.location[1]});
}




/*Google API to create the map and streetview on pageload*/
function mapCreate() {
    fenway = {lat: 51.500316, lng:  -0.126370};
    map = new google.maps.Map(document.getElementById('map'), {
        center: fenway,
        zoom: 10,
        disableDefaultUI: true, //disables the ui of the map so that client can not meddle with it.
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });

    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
            position: fenway,
            pov: {
                heading: 34,
                pitch: 10
            },
            disableDefaultUI: true,
            linksControl: false
        });
    map.setStreetView(panorama);
    markerMaker();

    // for(var marker_i=0; marker_i<locationObj.length; marker_i++) {
    //     var eachLocation = locationObj[marker_i];
    //     var marker = new google.maps.Marker({
    //         position: {lat: eachLocation.location[0], lng: eachLocation.location[1]},
    //         map: map,
    //         title: eachLocation.name
    //     });
    // }

}


function markerMaker(){
    var image = {
        url: "img/Reticle.png",
        // This marker is 20 pixels wide by 32 pixels high.
        // size: new google.maps.Size(2000, 2000),
        // // The origin for this image is (0, 0).
        // origin: new google.maps.Point(0, 0),
        // // The anchor for this image is the base of the flagpole at (0, 32).
        // anchor: new google.maps.Point(0, 0)
    };
    // Shapes define the clickable region of the icon. The type defines an HTML
    // // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // // The final coordinate closes the poly by connecting to the first coordinate.
    // var shape = {
    //     coords: [1, 1, 1, 20, 18, 20, 18, 1],
    //     type: 'poly'
    // };
    for(var marker_i=0; marker_i<locationObj.length; marker_i++) {
        var eachLocation = locationObj[marker_i];
        var marker = new google.maps.Marker({
            position: {lat: eachLocation.location[0], lng: eachLocation.location[1]},
            map: map,
            icon: image,
            shape: shape,
            title: eachLocation.name,
            zIndex: 3
        });
    }
}


//Start of Youtube API information

//  The <iframe> (and video player) will replace the <div> tag.
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//  This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: vidID, //Find a better way.
        autoplay: '1',
        events: {
            'onReady': onPlayerReady
        }
    });
}

//Youtube API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

var M = [];
responsiveVoice.speak('This is a test, and I hope that it works.');
