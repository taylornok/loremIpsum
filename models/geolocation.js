//Geo locations code

//HTML5 geolocation
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

var latlon="";
var map;
//show the location
function showPosition(position) {

    latlon = position.coords.latitude + "," + position.coords.longitude;

    var myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: myLatLng
    });

    new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'You are here!'
    });

    loadPointsOfInterest();

}

//customize pin on maps
function pinSymbol(color) {
    return {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#000',
        strokeWeight: 2,
        scale: 1,
   };
}

//load the points of interest in radius 2000
function loadPointsOfInterest(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBZYZbJI_suqw9VC2D1u1Us2e1j0f1mFus&location=" + latlon + "&radius=2000&type=point_of_interest&type=night_club&type=campground&type=bar",
        "method": "GET"
    }


    $.ajax(settings).done(function (response) {
        //console.log(response);
        response.results.forEach(function (location) {


            $("#pointsofi").append("<li>"+location.name+" , "+ "Rating: " +location.rating+"</li>");
           var myLatLng = { lat: location.geometry.location.lat, lng: location.geometry.location.lng }
           new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: location.name,
                icon: pinSymbol("green")
            });
        });
    });
}




        $( ".btn1" ).click(function() {
            window.location.href="location.html"
        });



    
    
    
    

