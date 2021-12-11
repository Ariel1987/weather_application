import HourlyForecast from './HourlyForecast/HourlyForecast'
import {
  DailyForecastWrapper,
  HeaderWrapper,
  HourlyForecastWrapper,
  Wrapper,
} from './Footer.styles'
import { useState } from 'react'
import DailyForecast from './DailyForecast/DailyForecast'

const Footer = (props) => {
  const [showWeatherForNextDays, setShowWeatherForNextDays] = useState(false)

  let buttonText = '7 days >'
  if (showWeatherForNextDays === true) {
    buttonText = 'Today >'
  }

  const handleShowWeatherForNextDays = () => {
    setShowWeatherForNextDays((prev) => prev !== true)
  }

  return (
    <Wrapper>
      <HeaderWrapper>
        {!showWeatherForNextDays && <h3>Today</h3>}
        <button
          type="button"
          onClick={handleShowWeatherForNextDays}
          style={{ position: 'absolute', right: '10vw' }}
        >
          {buttonText}
        </button>
      </HeaderWrapper>
      {!showWeatherForNextDays && (
        <ul>
        <HourlyForecastWrapper>
          <HourlyForecast/>
        </HourlyForecastWrapper>
        </ul>
      )}
      {showWeatherForNextDays && (
        <DailyForecastWrapper>
          <DailyForecast />
          <DailyForecast />
          <DailyForecast />
          <DailyForecast />
          <DailyForecast />
          <DailyForecast />
          <DailyForecast />
        </DailyForecastWrapper>
      )}
    </Wrapper>
  )
}

export default Footer
