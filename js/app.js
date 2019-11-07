//display city details
function init()
{
    document.getElementById("list").addEventListener("keypress",function displayData(e){
        if(e.keyCode==13)
        {
            let result=document.getElementById("list").value;
            document.getElementById("temp-display").style.display = "flex";
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