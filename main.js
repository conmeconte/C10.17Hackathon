
$(document).ready(init);

//map variables
var map;
var fenway;
var panorama;

//music variables
var player;
var vidID;

var locationObj=[
    {id: 1, name: "London", location: [51.5005803,-0.1258119], youTubeId:'CMXxG9A1nzE', trivia: null },
    {id: 2, name: "Istanbul", location: [41.0081056,28.9810191], youTubeId:'8C5NLfYdZaE', trivia: null },
    {id: 3, name: "Venice", location: [45.4384184,12.3359239], youTubeId:'mOgFS6AYoVc', trivia: null },
    {id: 4, name: "New York", location: [40.7536533,-73.9806382], youTubeId:'b07Z_qfchFk', trivia: null },
    {id: 5, name: "Tokyo", location: [35.7141231,139.7966704], youTubeId:'Q_w4DVgvVHs', trivia: null },
    {id: 6, name: "Los Vegas", location: [36.1126258,-115.1767051], youTubeId:'ZwbEuzJCnqI', trivia: null },
    {id: 7, name: "Cairo", location: [29.9778574,31.1287904], youTubeId:'at7xLnfubFY', trivia: null },
    {id: 8, name: "Beirut", location: [33.8969085,35.5023606], youTubeId:'PSbj2Mx2By8', trivia: null },
    {id: 9, name: "Moscow", location: [55.7530756,37.62217], youTubeId:'6lRuXckWC_8', trivia: null },
    {id: 10, name: "Berlin", location: [52.5163767,13.3788291], youTubeId:'H95y-F2kgoQ', trivia: null },
    {id: 11, name: "Prague", location: [50.0875638,14.4212062], youTubeId:'YnzgdBAKyJo', trivia: null },
    {id: 12, name: "Havana", location: [23.1401843,-82.3508177], youTubeId:'QNYlNmWfnxo', trivia: null },
    {id: 13, name: "Shanghai", location: [31.239481,121.4998016], youTubeId:'DeumyOzKqgI', trivia: null },
    {id: 14, name: "Rio De Janeiro", location: [-22.9522173,-43.2102183], youTubeId:'3gDboKGn-Sw', trivia: null },
    {id: 15, name: "Sydney", location: [-33.8590761,151.2221537], youTubeId:'hJzotJUlQws', trivia: null }


];

//music added will need to be called later.  player.loadVideoByID(locationObj.youTubeId);

var villains = [
{name: "Auric Goldfinger",
    photo: "villain_images/a_Goldfinger.jpg",
    trivia: ["Claims to be an expert pistol shot that never misses",
    "Is a Jeweller and Smuggler,",
    "Has a manservant named Oddjob"]
},
{name: "Alec Trevelyan",
    photo: "villain_images/Alec_Trevelyan.jpg",
    trivia: ["Formerly agent 006 of MI6",
    "Also known as Janus",]
},
{name: "Raoul Silva",
    photo: "villain_images/raoul_silva.png",
    trivia: ["former partner of Olivia Mansfield (M)",
    "Cyber-terrorist",
    "Captured, tortured, and imprisoned by the Chinese"]
}

];

var crimes = [" has stolen the GoldenEye satellite, and intends to erase the Bank of England's financial records. Destroying the British economy in the process.",
              " is planning to contaminate the water supply at Fort Knox, killing everyone and then stealing 15 billion in gold bullion.",
              " has hacked into MI6's database and plans to put all agents in danger by releasing their real identities to the world."]

function randomizer(arr){
    var random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}

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

function moveLocationsOnClick(){
    map.setCenter({lat:  this.location[0], lng: this.location[1]});
    map.streetView.setPosition({lat:  this.location[0], lng: this.location[1]});
}

function init(){
    createLocationButton(locationObj);

};



function mapCreate() {
    fenway = {lat: 51.500316, lng:  -0.126370};
    map = new google.maps.Map(document.getElementById('map'), {
        center: fenway,
        zoom: 10
    });
//        var cafeMarker = new google.maps.Marker({
//            position: {lat: 42.345573, lng: -71.991428},
//            map: map,
//            icon: 'https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe|FFFF00',
//            title: 'Cafe'
//        });
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
            position: fenway,
            pov: {
                heading: 34,
                pitch: 10
            }
        });
    map.setStreetView(panorama);
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


