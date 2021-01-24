var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.sky');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=afd6599669b5aa2d35ea3c811e49d3a9')
  .then(response => response.json())
  .then(data => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];
    main.innerHTML = nameValue;
    desc.innerHTML = descValue;
    temp.innerHTML = tempValue +"&degF";
    input.value ="";

  })

.catch(err => alert("Wrong city name!"));
})