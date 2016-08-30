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
