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
    humidity.innerHTML = resopnse.humidity
    temp.innerHTML = resopnse.temp
    wind_speed.innerHTML = resopnse.wind_speed
  })

  
	.catch(err => console.error(err));}

  submit.addEventListener("click",(e)=>{
    e.preventDefault()
getWeather(city.value)

  })

  getWeather("Delhi")


  let city=document.querySelector('input');