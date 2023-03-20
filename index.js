const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '89b581d107mshf352d90f3253593p1748fdjsn80f8c84c1a1f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
cityName.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then((response) => {
    console.log(response)
    document.getElementById("humidity").innerHTML=response.humidity
    document.getElementById("temp").innerHTML=response.temp
    document.getElementById("wind").innerHTML=response.wind_speed
  })

  
	.catch(err => console.error(err));}

  submit.addEventListener("click",(e)=>{


    if(e.keyCode===13){
      e.preventDefault()
      getWeather(city.value)
    }

    
    e.preventDefault()
getWeather(city.value)

  })

  getWeather("City :")
  let city=document.querySelector('input');

  const ai = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'X-API-KEY': '663d1402-30f0-4a43-90c2-877f2b61dc55'
    },
    body: JSON.stringify({
      enable_google_results: 'true',
      enable_memory: false,
      input_text: `About the weather in ${city.value} in about 20 words`
    })
  };
  
  fetch('https://api.writesonic.com/v2/business/content/chatsonic?engine=premium', ai)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        document.getElementById("text").innerHTML=response.message
 
    })
    .catch(err => console.error(err));

  
