import { Wrapper } from './CurrentTemperature.styles'
import { useForecast } from '../../context/forecast'
import useWeatherIcons from '../../hooks/useWeatherIcons'

const CurrentTemperature = () => {
  const { state } = useForecast()
  const icons = useWeatherIcons()

  return (
    <Wrapper>
      <img src={icons} alt="weather-icon" />
      <h1>{state.data?.currentTemperature}ºC</h1>
      <h3>{state.data?.currentWeather}</h3>
    </Wrapper>
  )
}

export default CurrentTemperature
