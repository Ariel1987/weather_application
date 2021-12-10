const parseAppData = (weatherResult, geocodeResult) => {
  const weatherData = parseWeatherData(weatherResult)
  const geocodeData = parseGeocodeData(geocodeResult)
  
  return {
    ...weatherData,
    ...geocodeData
  }
}

const parseWeatherData = (data) => {
  return {
    currentTemperature: Math.round(data.data.current.temp),
    currentWeather: data.data.current.weather[0].main,
    min: data.data.daily[0].temp.min,
    max: data.data.daily[0].temp.max,
    wind: data.data.current.wind_speed,
    humidity: data.data.current.humidity,
  }
}

const parseGeocodeData = (data) => {
  const cityName = data.data.features[0].context[0].text 
    || data.data.features[0].text  

  return {
    cityName,
    lat: data.data.features[0].center[1],
    lon: data.data.features[0].center[0]
  }
}

export default parseAppData
