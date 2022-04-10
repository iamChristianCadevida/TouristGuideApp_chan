/* Function to Get Todays Weather */
function getWeatherToday(cityInput) {
    var APIKey = "3d44e735d54eb161a90e34a5ec76979e";

    //clear for new search result
    document.getElementById("results").innerHTML="";
    var myarr=[]
    // Query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function (response) { 
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '');
            var mm = String(today.getMonth() + 1).padStart(2, ''); //January is 0!
            var yyyy = today.getFullYear();
             today = mm + '/' + dd + '/' + yyyy; 
            var getIcon = response.weather[0].icon;
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            document.getElementById("todayTitle").innerHTML= 'Today\'s Weather: ' +response.weather[0].main + '<img src="https://openweathermap.org/img/w/'+ getIcon + '.png">';
            document.getElementById("todayHeader").innerHTML="Date:"+today;
            document.getElementById("todayContent").innerHTML='Temperature <h1>'+tempF.toFixed() +'&deg F </h1>';
            var res = document.getElementById("results");
            res.innerHTML+= '<table class="table table-hover"><thead><tr class="bg-info text-white"><th style="text-align:center;">-</th><th scope="col">Date</th><th scope="col">Temperature</th><th scope="col">Humidity</th></tr></thead><tbody id="weatherresults"></tbody>';
            res.innerHTML+= '</tbody></table>';
            var resbody = document.getElementById("weatherresults");

        });

        
}
/* End Function to Get Todays Weather */
/* Function to Get Weather Forecast */
function getWeatherForecast(cityInput) {
    var APIKey = "3d44e735d54eb161a90e34a5ec76979e";   
    var queryURLFor = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&units=imperial&appid=" + APIKey;
    $.ajax({
        url: queryURLFor,
        method: "GET",

    })

        .then(function (response) {
            var getForInfo = response.list;
            for (var i = 1; i <= getForInfo.length / 8; i++) {
                var getIcon = getForInfo[i * 7].weather[0].icon;
               
                var getForDate = getForInfo[i * 7].dt * 1000;
                var getWeatherDate = new Date(getForDate).getDate();
                var getWeatherMonth = new Date(getForDate).getMonth();
                var getWeatherYear = new Date(getForDate).getFullYear();
                var getWeatherTime = new Date(getForDate).toLocaleTimeString();

                var getForTemp = getForInfo[i * 7].main.temp;
                var getForHum = getForInfo[i * 7].main.humidity;
                var celcius= Math.round((getForTemp-32) * .5556,2);

                var today = getWeatherMonth +"/" +getWeatherDate +"/"+ getWeatherYear +"<br>" + getWeatherTime;
                var resbody = document.getElementById("weatherresults");
                resbody.innerHTML += '<tr"><td align="center"><img src="https://openweathermap.org/img/w/'+ getIcon + '.png"></td><td scope="row">'+today+'</td><td scope="row">'+getForTemp +'&deg F</td><td scope="row">'+getForHum +'%</td></tr>';
            }


        })
       
    
        

}


/* Function to Get Weather Forecast */






