const apiKey = "ZbvAK1NYD8UWW2douU1f1H1KMFR2nfz7";

const getWeather = async (locationKey) => {
    let base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    let query = `${locationKey}?apikey=${apiKey}`;

    let response = await fetch(base + query);
    let data = await response.json();
    return data[0];
}
const getCity = async (city) => {
    let base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    let query = `?apikey=${apiKey}&q=${city}`;
  
    let response = await fetch(base + query);
    let data = await response.json();
    return data[0];
  }


export {getCity, getWeather, apiKey};
