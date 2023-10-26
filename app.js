let textField = document.querySelector(".input-field")
// let deg = document.querySelector(".deg")
let detail = document.querySelector(".citydetail")
let temp = document.querySelector(".temp")
let button = document.querySelector(".btn")
let icon  = document.querySelector(".icon-img")
let desc = document.querySelector(".desc")
let loader  = document.querySelector(".loader")
let flex = document.querySelector(".flex")
let apiKey  = "30b828c6c7b838999edd88150225afbf"
// console.log(icon);

const getWeather=()=>{
    loader.style.display = "block"
    flex.style.display = "flex"
    let userCity= textField.value;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${apiKey}`
    fetch(api).then((data)=>{return data .json()} ).then((result)=>{

        console.log(result);
    detail.textContent=result.name;

    let kelvin=result.main.temp-273
    let converted=kelvin.toFixed(0)
    temp.textContent=converted +"℃"
    // deg.style.display="block"

    desc.textContent=result.weather[0].description
    let iconType=result.weather[0].icon

        let weatherIcon=` https://openweathermap.org/img/wn/${iconType}@4x.png`
        icon.src=weatherIcon
    loader.style.display="none"

     
    })

}
button.addEventListener('click',getWeather)