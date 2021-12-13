import { Wrapper } from './HourlyForecast.styles'
import { useForecast } from '../../../context/forecast'
import selectWeatherIcon from '../../../utils/selectWeatherIcon'

const oneDay = 24

const HourlyForecast = () => {
  const { state } = useForecast()

  const listHourlyForecast = () =>
    state.data?.hourly.slice(0, oneDay).map((data) => {
      return (
        <li key={data.dt}>
          <h5>{Math.round(data.temp)}º</h5>
          <img src={selectWeatherIcon({ ...data, sunrise: state.data.sunrise, sunset: state.data.sunset })} alt="weather-icon" />
          <p>{new Date(data.dt * 1000).getHours()}h</p>
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
