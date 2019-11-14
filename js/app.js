function init()
{
    //this function will excecute after pressing enter key and it will get the data which is entered.
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
    //this function will excecute after clicking on farenheit button and it will convert temperature in Fahrenheit unit.
    document.getElementById("fahrenheit").addEventListener("click",function displayFah(e){

        let result=document.getElementById("list").value;
        dw =new Weather(result);
        dw.displayFahrenheit();
    })
    //this function will excecute after clicking on celcius button and it will convert temperature in Celcius unit.
    document.getElementById("celcius").addEventListener("click",function displayFah(e){

        let result=document.getElementById("list").value;
        dw =new Weather(result);
        dw.displayCelcius();
    })
}

window.onload=init;