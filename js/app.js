//display city details

function init()
{
    document.getElementById("list").addEventListener("keypress",function displayData(e){
        if(e.keyCode==13)
        {
            // console.log("kegjd")
            let result=document.getElementById("list").value;
            dw =new Weather(result);
            dw.displayDate()
            dw.displayValues();
        }
    })
    document.getElementById("fahrenheit").addEventListener("click",function displayFah(e){

        let result=document.getElementById("list").value;
        dw =new Weather(result);
        dw.displayFahrenheit();
    })
    document.getElementById("celcius").addEventListener("click",function displayFah(e){

        let result=document.getElementById("list").value;
        dw =new Weather(result);
        dw.displayCelcius();
    })
}

window.onload=init;