import { Wrapper } from "./CurrentTemperature.styles"

const CurrentTemperature = () => {
  return (
    <Wrapper>
      <img src='./icons/sunny-cloudy.png' alt="weather-icon" />
      <h1>21ºC</h1>
      <h3>Clouds</h3>
    </Wrapper>
  )
}

export default CurrentTemperature
