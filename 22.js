function celciusToKelvin(value){
    const result = value += 273.15
    console.log(result)
}

celciusToKelvin(80)

function kelvinToCelius(value){
    const result = value -= 273.15
    console.log(result)
}

kelvinToCelius(298.15)

function fahrenheitToCelcius(value){
    result = (5/9) * (value - 32);
    console.log(result)
}

fahrenheitToCelcius(36.5)

function celciusToFahrenheit(value){
    result = value * 9 / 5 + 32;
    console.log(result)
}

celciusToFahrenheit(22)

function fahrenheitToKelvin(value){
    result = ((value-32)/1.8)+273.15
    console.log(result)
}

fahrenheitToKelvin(234)

function kelvinToFahrenheit(value){
    result = (value - 273.15) * 9/5 + 32  
    console.log(result)
}
kelvinToFahrenheit(203)