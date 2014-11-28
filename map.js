/**
 * Google Map API options for start.hartmedical.org 
 *
 * @author  Arnaud P Crowther
 * @version 1.4
 */

var zoom = 8;
var center = new google.maps.LatLng(42.965405,-83.94928);
var locArray = [
    //  [0]=> (INT):    'latitude'
    //  [1]=> (INT):    'longitude'
    //  [2]=> (STRING): 'label'
    //  [3]=> (INT):    'type'... options: {1- Hart, 2- Genesys, 3- McLaren, 4- Henry}
    [43.0063681, -83.5118453, "Davison - Cal Drive", 3],
    [43.0075640, -83.5104090, "Davison - Granger", 3],
    [43.5942664, -83.8352677, "Essexville", 3],
    [43.0605179, -83.3186314, "Lapeer", 3],
    [42.6667097, -84.5443532, "Lansing - Cedar Street", 3],
    [42.7041720, -84.5548850, "Lansing - Greenlawn", 3],
    [42.9945422, -83.7330537, "Flint - Ballenger Point", 3],
    [43.0145320, -83.7328580, "Flint Hospital", 3],
    [42.7279747, -83.3762562, "Clarkston", 3],
    [42.5871880, -82.8967716, "Mt. Clemens", 3],
    [42.8921516, -83.6387827, "GHP", 2],
    [42.9158980, -83.6500620, "GBR", 1],
    [42.8921516, -83.6422838, "Grand Blanc - Genesys", 2],
    [42.9121533, -83.6086399, "South Saginaw", 2],
    [42.4461223, -83.2561472, "Southfield", 4],
    [42.5285764, -83.4394892, "Commerce", 4],
    [42.1382359, -83.2260663, "Woodhaven", 4],
    [42.4203319, -83.2147277, "Northwest Detroit", 4],
    [42.3314270, -83.0457538, "Detroit Main", 4],
    [42.3964010, -82.9023890, "Cottage", 4],
    [42.2106480, -83.1486094, "Wyandotte", 4],
    [42.6262126, -82.9811278, "Lakeside", 4],
    [42.6138310, -82.9599990, "Macomb", 4],
    [42.3222599, -83.1763145, "Dearborn", 4],
    [42.3839170, -83.3325096, "Livonia", 4],
    [42.5391428, -83.4077692, "West Bloomfield", 4],
    [43.0166609, -82.4388940, "Port Huron", 3],
    [42.7030740, -84.5347140, "Lansing Penn", 3],
    [43.5894000, -83.8690530, "Bay Hospital", 3]
];
    
function initialize() {
    
    var mapOptions = {
        center: center, zoom: zoom
    };
    
    var styles = [
        {"featureType":"road","elementType":"geometry","stylers":[
            {"lightness":100}, 
            {"visibility":"simplified"}]},
        {"featureType":"water","elementType":"geometry","stylers":[
            {"visibility":"on"},
            {"color":"#C6E2FF"}]},
        {"featureType":"poi","elementType":"geometry.fill","stylers":[
            {"color":"#C5E3BF"}]},
        {"featureType":"road","elementType":"geometry.fill","stylers":[
            {"color":"#D1D1B8"}]}
    ];
    
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    map.setOptions({styles: styles});

    var image = {
        url: '../res/pin4.png'
    }

    for(x in locArray){
        var name = locArray[x][2];
        var pin = locArray[x][3];
        var latlng = new google.maps.LatLng(locArray[x][0], locArray[x][1]);
        addMarker(map, name, latlng, pin);
    }
    
    function getPinColor(pin) {
        if (pin === 1) {
            image = { url: '../res/pin-hm.png' }
        }
        if (pin === 2) {
            image= { url: '../res/pin-gn.png' }
        }
        if (pin === 3) {
            image= { url: '../res/pin-mc.png' }
        }
        if (pin === 4) {
            image= { url: '../res/pin-hf.png' }
        }
    }
    
    function addMarker(map, name, latlng, pin){
        
        getPinColor(pin);
        
        var infoWin = new google.maps.InfoWindow({
            content: "<div class='info-win'>"+name+"</div>"
        });
        var marker = new google.maps.Marker({
            map: map,
            position: latlng,
            title: name,
            icon: image
        });
        google.maps.event.addListener(marker, 'click', function(){
            infoWin.open(map, marker);
        });
    }
}

google.maps.event.addDomListener(window, 'load', initialize);
