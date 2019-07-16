const apiKey = "GMUlOH1VSDULkcAgUcCkxmUp4LGbLtUt";


const getCity = async (city) => {
    let base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    let query = `?apikey=${apiKey}&q=${city}`;
  
    let response = await fetch(base + query);
    let data = await response.json();
    return data[0];
  }




export {getCity};
