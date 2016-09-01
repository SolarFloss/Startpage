/*

Ideas
Get the Reddit API
Get a Facebook API
Get an Instagram API
Get a News RSS
Maybe a Financial Stocks API?
Work Email API
An Inspirational Quote or Video

*/




window.onload = function(){
  document.getElementById("searchButton").addEventListener("click", barHandle);
  document.getElementById("searchBar").addEventListener("keyup",keyHandle)
  preSearch = "https://www.bing.com/search?q=";
  preWiki = "https://en.wikipedia.org/wiki/";
  reddit = "https://www.reddit.com"
  preYoutube = "https://www.youtube.com/results?search_query=";
  dateInfo();
  getWeather();
}




function barHandle(){
  var input = document.getElementById("searchBar").value
  var lower = input.toLowerCase();


  if(input != ""){
      if(input.indexOf("w:") > -1){
        window.location.assign(preWiki + input.replace("w:",""))
      }else if(input.indexOf("/r/") > -1){
        window.location.assign(reddit + input);
      }else if(input.indexOf("y:") > -1){
        window.location.assign(preYoutube + input.replace("y:",""));
      }else if(input.indexOf(".com") > -1){
        window.location.assign("https://www." + input);
      }else{
        window.location.assign(preSearch + input);
      }
  }
}

function dateInfo(){

  var months = ["Jan","Fed","March","April","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
  var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  var timeDisplay = document.getElementById("time");
  var dateDisplay = document.getElementById("date");
  var dayDisplay = document.getElementById("day");


  var date = new Date,
      hour = date.getHours(),
      minute = date.getMinutes(),
      second = date.getSeconds();
      day = date.getDay();
      month = date.getMonth();
      year = date.getFullYear();
      numberDate = date.getDate();

  if(date.getHours() < 10)
    hour = "0" + date.getHours();
  else {
    hour = date.getHours();
  }

  if(date.getMinutes() < 10)
    minute = "0" + date.getMinutes();
  else {
    minute = date.getMinutes();
  }

  if(date.getSeconds() < 10)
    second = "0" + date.getSeconds();
  else {
    second = date.getSeconds();
  }

  timeDisplay.innerHTML = hour + ":" + minute + ":" + second;
  dateDisplay.innerHTML = months[month] + " " + numberDate + ", " + year;
  dayDisplay.innerHTML = days[day];
  setTimeout("dateInfo()",1000);
}

function keyHandle(event){
  if(event.keyCode == 13)
    barHandle();
}

function getWeather(){

  var APPID = "63ea39292d2682b4b8db86a20e1a69dd";
  var url = "http://api.openweathermap.org/data/2.5/weather?" +
    "id=" + 4794457 +
    ",us&APPID=" + APPID;


  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var data = JSON.parse(xmlhttp.responseText);
      console.log(data);
      var weather = {};
      weather.temp = data.main.temp
      weather.condition = data.weather[0].description;
      dispayWeather(weather);
    }
  };
  xmlhttp.open("GET",url,true);
  xmlhttp.send();

}

function dispayWeather(weather){
  var temp = Math.round((weather.temp*1.8) - 459.4);
  var conditions = weather.condition;
  var tempDisplay = document.getElementById("temperature");
  var conditionsDisplay = document.getElementById("conditions");


  tempDisplay.innerHTML = temp;
  if(conditions == "clear sky"){
    conditionsDisplay.alt = "Clear Skies";
    if(new Date().getHours() <= 18){
      conditionsDisplay.src = "resources/icons/clear day.png";
    }else{
      conditionsDisplay.src = "resources/icons/clear night.png";
    }
  }else if(conditions == "few clouds"){
    conditionsDisplay.alt = "Cloudy";
    if(new Date().getHours() <= 18){
      conditionsDisplay.src = "resources/icons/clouds day.png";
    }else{
      conditionsDisplay.src = "resources/icons/clouds night.png";
    }
  }else if(conditions == "scattered clouds"){
    conditionsDisplay.alt = "Scattered Clouds";
    if(new Date().getHours() <= 18){
      conditionsDisplay.src = "resources/icons/clouds day.png";
    }else{
      conditionsDisplay.src = "resources/icons/clouds night.png";
    }
  }else if(conditions == "broken clouds"){
    conditionsDisplay.alt = "Broken Clouds";
    conditionsDisplay.src = "resources/icons/broken clouds.png"
  }

}
