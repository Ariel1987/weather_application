import icons from './weatherIcons'
import { utcToZonedTime } from 'date-fns-tz'

const selectWeatherIcon = (data, calculateDayTime = true) => {
  if (!data) return

  let dayTimeIcons
  const weather = !data.weather ? data.currentWeather : data.weather[0].main

  const now = data.now
    ? utcToZonedTime(new Date(data.now * 1000), data.timezone).getHours()
    : utcToZonedTime(new Date(), data.timezone).getHours()

  const sunrise = utcToZonedTime(
    new Date(data.sunrise * 1000),
    data.timezone,
  ).getHours()
  
  const sunset = utcToZonedTime(
    new Date(data.sunset * 1000),
    data.timezone,
  ).getHours()

  if (calculateDayTime) {
    dayTimeIcons = now > sunrise && now < sunset ? icons.day : icons.night
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
