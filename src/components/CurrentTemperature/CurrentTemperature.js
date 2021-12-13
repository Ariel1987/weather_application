import { Wrapper } from './CurrentTemperature.styles'
import { useForecast } from '../../context/forecast'
import selectWeatherIcon from '../../utils/selectWeatherIcon'

const CurrentTemperature = () => {
  const { state } = useForecast()

  return (
    <Wrapper>
      <img src={selectWeatherIcon(state.data)} alt="weather-icon" />
      <h1>{state.data?.currentTemperature}ºC</h1>
      <h3>{state.data?.currentWeather}</h3>
    </Wrapper>
  )
}

export default CurrentTemperature
