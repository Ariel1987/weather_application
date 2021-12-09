import { WeatherWrapper, Wrapper } from './DailyForecast.syles'

const DailyForecast = () => {
  return (
    <Wrapper>
      <p>Mon</p>
      <WeatherWrapper>
        <img src="./icons/clear.png" alt="sunny" />
        <p>Sunny</p>
      </WeatherWrapper>
      <p>21º 29º</p>
    </Wrapper>
  )
}

export default DailyForecast
