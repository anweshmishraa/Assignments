var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name1 = document.querySelector('.name');
var country1 = document.querySelector('.country');
var desc1 = document.querySelector('.desc');
var temp1 = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=e87288e5a3090770a862cdd324f25336')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var countryValue = data['sys']['country'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        name1.innerHTML = nameValue;
        country1.innerHTML = countryValue;
        temp1.innerHTML = tempValue - 273 + "°C";
        desc1.innerHTML = descValue;
    })

    .catch(err => alert("Wrong city name!"))
})