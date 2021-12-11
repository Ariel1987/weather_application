import { useForecast } from '../../../context/forecast'
import { WeatherWrapper, Wrapper } from './DailyForecast.syles'

const DailyForecast = () => {
  const { state } = useForecast()
  const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <Wrapper>
      <ul>
        {state.data?.daily.map((data) => (
          <li key={data.dt}>
            <p>{daysOfTheWeek.filter((value, index) => index === new Date(data.dt*1000).getUTCDay() && value)}</p>
            <WeatherWrapper>
              <img src="./icons/clear.png" alt="sunny" />
              <p>{data.weather[0].main}</p>
            </WeatherWrapper>
            <p>{Math.round(data.temp.min)}º {Math.round(data.temp.max)}º</p>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export default DailyForecast
