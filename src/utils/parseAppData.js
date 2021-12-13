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
    min: Math.round(data.data.daily[0].temp.min),
    max: Math.round(data.data.daily[0].temp.max),
    wind: Math.round(data.data.current.wind_speed),
    humidity: data.data.current.humidity,
    sunrise: data.data.current.sunrise,
    sunset: data.data.current.sunset,
    hourly: data.data.hourly,
    daily: data.data.daily,
    icon: data.data.current.weather[0].icon,
    timezone_offset: data.data.timezone_offset, 
    dateTime: data.data.current.dt,
    timezone: data.data.timezone,
  }
}

const parseGeocodeData = (data) => {
  const cityName = data.data.features[0].context[0].text 

  return {
    cityName,
    lat: data.data.features[0].center[1],
    lon: data.data.features[0].center[0]
  }
}

export default parseAppData
