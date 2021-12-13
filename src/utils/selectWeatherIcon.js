import icons from './weatherIcons'

const selectWeatherIcon = (data, calculateDayTime = true) => {
  if(!data) return

  let dayTimeIcons
  const weather = !data.weather ? data.currentWeather : data.weather[0].main 
  const dateTime = !data.dateTime ? data.dt : data.dateTime

  if (calculateDayTime) {
    dayTimeIcons = dateTime > data.sunrise && dateTime < data.sunset ? icons.day : icons.night 
  } else {
    dayTimeIcons = icons.day
  }

  switch (weather) {
    case 'Clear':
      return dayTimeIcons.Clear
    case 'Rain':
      return dayTimeIcons.Rain
    case 'Snow':
      return dayTimeIcons.Snow
    case 'Clouds':
      return dayTimeIcons.Cloud
    case 'Thunderstorm':
      return dayTimeIcons.Thunderstorm
    default:
      return dayTimeIcons.Cloud
  }
   
}

export default selectWeatherIcon