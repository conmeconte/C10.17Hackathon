
$(document).ready(init);

//map variables
var map;
var fenway;
var panorama;

//music variables
var player;
var vidID;


var locationObj=[
    {id: 1, name: "London", location: [51.5005803,-0.1258119], youTubeId:null, trivia: null },
    {id: 2, name: "Istanbul", location: [41.0081056,28.9810191], youTubeId:null, trivia: null },
    {id: 3, name: "Venice", location: [45.4384184,12.3359239], youTubeId:null, trivia: null },
    {id: 4, name: "New York", location: [40.7536533,-73.9806382], youTubeId:null, trivia: null },
    {id: 5, name: "Tokyo", location: [35.7141231,139.7966704], youTubeId:null, trivia: null },
    {id: 6, name: "Las Vegas", location: [36.1126258,-115.1767051], youTubeId:null, trivia: null },
    {id: 7, name: "Cairo", location: [29.9778574,31.1287904], youTubeId:null, trivia: null },
    {id: 8, name: "Beirut", location: [33.8969085,35.5023606], youTubeId:null, trivia: null },
    {id: 9, name: "Moscow", location: [55.7530756,37.62217], youTubeId:'6lRuXckWC_8', trivia: null },
    {id: 10, name: "Berlin", location: [52.5163767,13.3788291], youTubeId:null, trivia: null },
    {id: 11, name: "Prague", location: [50.0875638,14.4212062], youTubeId:null, trivia: null },
    {id: 12, name: "Havana", location: [23.1401843,-82.3508177], youTubeId:null, trivia: null },
    {id: 13, name: "Shanghai", location: [31.239481,121.4998016], youTubeId:null, trivia: null },
    {id: 14, name: "Rio De Janeiro", location: [-22.9522173,-43.2102183], youTubeId:null, trivia: null },
    {id: 15, name: "Sydney", location: [-33.8590761,151.2221537], youTubeId:null, trivia: null }


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

function init(){
    createLocationButton(locationObj);

};





function randomizer(arr){
    var random = arr[Math.floor(Math.random() * arr.length)];
    return random;
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

    for(var marker_i=0; marker_i>locationObj.length; marker_i++) {
        var eachLocation = locationObj[marker_i];
        var marker = new google.maps.Marker({
            position: {lat: eachLocation.location[0], lng: eachLocation.location[1]},
            map: map,
            title: eachLocation.name


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


