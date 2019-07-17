import _ from 'lodash';
import {getCity, getWeather} from "./token";
import "./banner.css";
import {images} from './banner';

// rick eyes

$(".move-area").mousemove(function(event) {
  var eye = $(".eye");
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});

// API request

getCity('berlin').then(data => {
  return getWeather(data.Key);
}).then(data => {
 console.log(data); 
})
.catch(err => console.log(err));


const updateCity = async (city) => {
  let cityDetails = await getCity(city);
  console.log(cityDetails.Key);
  let weather = await getWeather(cityDetails.Key);
 
  
  return ({
      cityDetails : cityDetails,
      weather : weather
 });

}
const cityInput = document.querySelector('.input');
const cityForm = document.querySelector('#form'); 

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    let city = cityInput.value.trim();
    console.log(city);
     cityInput.value = '';
    updateCity(city).then(data => {
      // background image
      document.querySelector('#header').innerHTML = `${city}`;
      document.querySelector('#temperature').innerHTML = Math.floor(`${data.weather.Temperature.Metric.Value}`)+ "&#8451;";
      // icons
     let icon = document.querySelector('.icon img');
      let icons = `../src/icons/${data.weather.WeatherIcon}.svg`;
      icon.setAttribute('src', icons );
      console.log(data)})
    .catch(err => console.log(err));




})


images();


