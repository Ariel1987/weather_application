import HourlyForecast from './HourlyForecast/HourlyForecast'
import {
  DailyForecastWrapper,
  HeaderWrapper,
  HourlyForecastWrapper,
  Wrapper,
} from './Footer.styles'
import DailyForecast from './DailyForecast/DailyForecast'
import { SET_DAILY_FORECAST, RESET_DAILY_FORECAST, useForecast } from '../../context/forecast'

const Footer = () => {
  const { state: { resetDailyForecast }, dispatch } = useForecast()

  let buttonText = resetDailyForecast ? 'Today >' : '7 days >'
  
  const handleShowWeatherForNextDays = () => {
    const shouldResetDailyForecast = buttonText === '7 days >' ? RESET_DAILY_FORECAST : SET_DAILY_FORECAST 

    dispatch({ type: shouldResetDailyForecast })
  }

  return (
    <Wrapper>
      <HeaderWrapper>
        {!resetDailyForecast && <h3>Today</h3>}
        <button
          type="button"
          onClick={handleShowWeatherForNextDays}
          style={{ position: 'absolute', right: '10vw' }}
        >
          {buttonText}
        </button>
      </HeaderWrapper>
      {!resetDailyForecast && (
        <HourlyForecastWrapper>
          <HourlyForecast/>
        </HourlyForecastWrapper>
      )}
      {resetDailyForecast && (
        <DailyForecastWrapper>
          <DailyForecast />
        </DailyForecastWrapper>
      )}
    </Wrapper>
  )
}

export default Footer
