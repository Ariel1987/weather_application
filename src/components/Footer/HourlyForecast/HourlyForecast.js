import { Wrapper } from './HourlyForecast.styles'
import { useForecast } from '../../../context/forecast'
import selectWeatherIcon from '../../../utils/selectWeatherIcon'
import { utcToZonedTime } from 'date-fns-tz'

const oneDay = 24

const HourlyForecast = () => {
  const { state } = useForecast()
  const timezone = state.data?.timezone

  const listHourlyForecast = () =>
    state.data?.hourly.slice(0, oneDay).map((data) => {
      const date = new Date(data.dt * 1000)
      const zonedDate = utcToZonedTime(date, timezone)
      const weatherData = {
        ...data,
        now: data.dt,
        timezone,
        sunrise: state.data.sunrise,
        sunset: state.data.sunset,
      }
      return (
        <li key={data.dt}>
          <h5>{Math.round(data.temp)}º</h5>
          <img
            src={selectWeatherIcon(weatherData)}
            alt="weather-icon"
          />
          <p>{zonedDate.getHours()}h</p>
        </li>
      )
    })

  return (
    <Wrapper>
      <ul>{listHourlyForecast()}</ul>
    </Wrapper>
  )
}

export default HourlyForecast
