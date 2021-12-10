import { Wrapper } from './CurrentTemperature.styles'
import { useForecast } from '../../context/forecast'

const CurrentTemperature = () => {
  const { state } = useForecast()

  return (
    <Wrapper>
      <img src='./icons/sunny-cloudy' alt="weather-icon" />
      <h1>{state.data?.currentTemperature}ºC</h1>
      <h3>{state.data?.currentWeather}</h3>
    </Wrapper>
  )
}

export default CurrentTemperature
