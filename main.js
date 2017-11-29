$(document).ready(init);


var map;
var fenway;
var panorama;
var locationObj=[
    {name: "Istanbul", location: [41.0081056,28.9810191], youTubeId:null, trivia: null },
    {name: "Venice", location: [45.4384184,12.3359239], youTubeId:null, trivia: null },
    {name: "New York", location: [40.7536533,-73.9806382], youTubeId:null, trivia: null },

];

function createLocationButton(locations){

    for(var location_i=0; location_i<locations.length; location_i++){
        var buttonElem=$('<button>');
        locations[location_i].domElement=buttonElem;
        buttonElem.text(locations[location_i].name);
        $('.locationBtns').append(buttonElem);
    }


}

function init(){
    createLocationButton(locationObj);
    $('.Istanbul').on("click",function(){
        map.setCenter({lat:  41.0081056, lng: 28.9810191});
        map.streetView.setPosition({lat:  41.0081056, lng: 28.9810191});
//                function markerLocation() {
//                    var marker = new google.maps.Marker({
//                        position: {lat: 28.9810191, lng: 28.9810191},
//                        map: map
//                    });
//                    markers.push(marker);
//                };
//                markerLocation();
    });
    $('.Sydney').on("click",function() {
        map.setCenter({lat: -33.8590761, lng: 151.2221537});
        map.streetView.setPosition({lat: -33.8590761, lng: 151.2221537});
    })
};



function mapCreate() {
    fenway = {lat: 42.345573, lng: -71.098326};
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