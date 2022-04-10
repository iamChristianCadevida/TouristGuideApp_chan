$(document).ready(function() { goCheck(); });
/* Start Checking for Result */
function goCheck(){
    event.preventDefault();
    var cityInput = document.getElementById("checkCity").value;
    document.getElementById("checkCity").value="";
    document.getElementById("City").innerHTML="Result for location: "+ cityInput;
    getNearbyCategory(cityInput);
    getWeatherTodayButton();
}
/* Start Checking for Result */