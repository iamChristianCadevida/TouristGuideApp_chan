/* Variable Declarations */
var activeCity=""; /* String Var for WeatherChecking */
var currentcity=""; /* String Var for Place */
var map ;
var markerIcon;
var myAPIKey = "7464d271226944ccb98cc1a38c5177a2";
/* First TriggeredFunction
  Displaying all Category list based on responses
  Also, Add markers for all venues  
*/

function getNearbyCategory(city){
  resetmap();
  document.getElementById("categoryList").innerHTML="";
  document.getElementById("currentCategory").innerHTML="All";
    currentcity=city;
    const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'fsq39FB7GMzXes4sdt5e7f7y+COTDuIrXQ9f3M3RPBI/Ppk='
        }
      };
      var places=[];
      var categoryid = [];
      var categoryname = [];
      var categoryFinal=[];
      var geocodeslat = 0;
      var icon="";
          var geocodeslon = 0;
      fetch('https://api.foursquare.com/v3/places/search?near='+currentcity+'&limit=50', options)
      .then(response => response.json())
      .then(response => {console.log(response);
        response.results.forEach(element => {
          var address= element.location.formatted_address;
          var venue= "<div align='center'><h1><strong>"+element.name + "</strong></h1>"+ address+ "</div>";

           geocodeslat = element.geocodes.main.latitude;
          geocodeslon = element.geocodes.main.longitude;
          activeCity= element.location.locality;
       
          addmarker(geocodeslat,geocodeslon,venue);
            for (i = 0; i<element.categories.length;i++){   
              var categoryResult = {id: element.categories[i].id, name: element.categories[i].name}
              categoryFinal.push(categoryResult);       
           }        

        })
      })
      .then(response => {
        
      categoryFinal.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
      var uniqueCatId = categoryFinal;
      
      var prev="";
      for (x=0; x<uniqueCatId.length;x+=2){
        if(uniqueCatId[x].name!=prev){
          document.getElementById("categoryList").innerHTML += ' <a class="dropdown-item" href="#" onclick="getNearbyPlaces(\''+currentcity+'\','+ uniqueCatId[x].id +',\''+uniqueCatId[x].name+'\');">'+ uniqueCatId[x].name +'</a>';
         prev=uniqueCatId[x].name;
        }
          
         }
        
         setmap(geocodeslat,geocodeslon);
      }).then(response => {
        getWeatherToday(activeCity);
        getWeatherForecast(activeCity);

      })      
      .catch(err => console.error(err));
}
/* End of First TriggeredFunction*/
/* Function to get NearybyPlaces based on specific category */
function getNearbyPlaces(city,category,name){
  resetmap();
 
  document.getElementById("currentCategory").innerHTML=name;
  
    currentcity=city;
    const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'fsq39FB7GMzXes4sdt5e7f7y+COTDuIrXQ9f3M3RPBI/Ppk='
        }
      };
      var venueList=[];
      var geocodeslat = 0;
    
      var geocodeslon = 0;
      fetch('https://api.foursquare.com/v3/places/search?near='+currentcity+'&limit=50&categories='+category, options)
      .then(response => response.json())
      .then(response => {console.log(response);
        response.results.forEach(element => {
          

          geocodeslat = element.geocodes.main.latitude;
          geocodeslon = element.geocodes.main.longitude;
          var address= element.location.formatted_address;
          var venue= "<div align='center'><h1><strong>"+element.name + "</strong></h1>"+ address+ "</div>";
          activeCity= element.location.locality;
          addmarker(geocodeslat,geocodeslon,venue);
        })
      })
      .then(response => {
        setmap(geocodeslat,geocodeslon);
      }).then(response => {
        getWeatherToday(activeCity);
        getWeatherForecast(activeCity);
      })        
      .catch(err => console.error(err));
}
/* Function to get NearybyPlaces based on specific category */
/* Function to addMarkers on the MapTiles */
function addmarker(lat,long,content){
 
  
   markerIcon = L.icon({
    iconUrl:  `https://api.geoapify.com/v1/icon/?type=material&color=red&iconType=awesome&apiKey=7464d271226944ccb98cc1a38c5177a2`,
    iconSize: [31, 46], // size of the icon
    iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
  });
  const zooMarkerPopup = L.popup().setContent(content);
const zooMarker = L.marker([lat, long], {
  icon: markerIcon
}).bindPopup(zooMarkerPopup).addTo(map);

}
/* End Function to addMarkers on the MapTiles */

/* Function to reset Map in order to initialized map once again based on specified query */
function resetmap(){
  if (map != undefined) { map.remove(); }
  map = L.map("my-map");
  map.reload;
}
/* End Function to reset Map in order to initialized map once again based on specified query */


/* Function to initialized Map */
function setmap(lat,longs){
  
  map.setView([lat,longs], 15);
  
  var isRetina = L.Browser.retina;

  var baseUrl =
    "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
  var retinaUrl =
    "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";

  // Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
  L.tileLayer(isRetina ? retinaUrl : baseUrl, {
    attribution:
      'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>',
    apiKey: myAPIKey,
    maxZoom: 100,
    id: "osm-bright",
  }).addTo(map);

}

/*End Function to initialized Map */

