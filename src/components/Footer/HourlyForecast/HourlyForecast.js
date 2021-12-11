import { Wrapper } from './HourlyForecast.styles'
import { useForecast } from '../../../context/forecast'
import useWeatherIcons from '../../../hooks/useWeatherIcons'

const HourlyForecast = () => {
  const { state } = useForecast()
  const icons = useWeatherIcons()
  // const time = new Date(0)
  // time.setUTCHours()
  
  return (
    <Wrapper>
      <h5>{state.data?.hourlyTemperature}º</h5>
      <img src={icons} alt="weather-icon" />
      <p>{state.data?.dateTime}h</p>
    </Wrapper>
  )
}

export default HourlyForecast
