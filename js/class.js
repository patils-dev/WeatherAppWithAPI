class Weather{
    constructor(city)
    {
        this.city=city;
    }

    displayDate()
    {
        var d=new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
        var newD = new Date();
        var n = newD.getDay();
        let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        document.getElementById("day").innerHTML =week[n]+" , "+d;

    }
displayValues(){
    let selectedCity=this.city;

    // const proxy="https://cors-anywhere.herokupp.com/"
    $.getJSON("http://api.openweathermap.org/data/2.5/find?q="+selectedCity+"&units=metric&appid=344b790f76ac39d29c9973f2736c19c3", 
        function(data){
            let icon="http://openweathermap.org/img/w/"+data.list[0].weather[0].icon+".png";
            document.getElementById("cityName").innerHTML=data.list[0].name;
            document.getElementById("stateName").innerHTML=data.list[0].sys.country;
            $("#icon").attr("src",icon);
            document.getElementById("weatherName").innerHTML=data.list[0].weather[0].main;
            document.getElementById("temperature").innerHTML=data.list[0].main.temp;
            document.getElementById("celcius").disabled = true;
        })
}

displayFahrenheit(){
    let tempCel=document.getElementById("temperature").textContent;
    let fahTemp=Math.round((tempCel*1.8)+32);
    //console.log(fahTemp);
    document.getElementById("temperature").innerHTML=fahTemp;

}

displayCelcius(){

    let fahTemp=document.getElementById("temperature").textContent;
    let celTemp=Math.round((fahTemp*1.8)+32);
    document.getElementById("temperature").innerHTML=celTemp;

}

}