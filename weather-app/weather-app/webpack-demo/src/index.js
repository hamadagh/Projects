import _ from 'lodash';
import {getCity, getWeather} from "./token";
import "./banner.css";
import {images} from './banner';




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
      document.querySelector('#header').innerHTML = `${city}`;
      document.querySelector('#temperature').innerHTML = Math.floor(`${data.weather.Temperature.Metric.Value}`)+ "&#8451;";
      console.log(data)})
    .catch(err => console.log(err));




})

images();


