class Weather{
    constructor(city)
    {
        this.city=city;
    }
}



displayValues(){
    let selectedCity=this.city;

    // const proxy="https://cors-anywhere.herokupp.com/"
    $.getJSON("http://api.openweathermap.org/data/2.5/find?q="+selectedCity+"&units=metric&appid=344b790f76ac39d29c9973f2736c19c3", 
    function(data){
        let icon="http://openweathermap.org/img/w/"+data.list[0].weather[0].icon+".png";
        
    })
}

}