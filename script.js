//create a request variable using XMLhttprequest

var request = new XMLHttpRequest();

//open a connection

request.open('Get','https://restcountries.eu/rest/v2/all',true);

//send a connection

request.send();

//onload a connection

request.onload = function(){
    var countrydata = JSON.parse(this.response);
    let totalPopulation = 0;
   for(var i in countrydata){
       totalPopulation += countrydata[i].population;
   }
   console.log("total population of countries is : " + totalPopulation.toLocaleString());
    
}