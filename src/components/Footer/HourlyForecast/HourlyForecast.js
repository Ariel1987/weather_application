import { Wrapper } from './HourlyForecast.styles'
import { useForecast } from '../../../context/forecast'
import useWeatherIcons from '../../../hooks/useWeatherIcons'

const HourlyForecast = () => {
  const { state } = useForecast()
  const icons = useWeatherIcons()

  return (
    <Wrapper>
      <ul>
        {state.data?.hourly.slice(0, 24).map(data =>
        <li key={data.dt}>
          <h5>{Math.round(data.temp)}º</h5>
          <img src={icons} alt="weather-icon" />
          <p>{new Date(data.dt*1000).getHours()}h</p>
        </li>
        )}
      </ul>
    </Wrapper>
  )
}

export default HourlyForecast
