import { useForecast } from '../context/forecast'

const useDayOrNightBackground = () => {
  const { state } = useForecast()
  const currentTime = state.data?.dateTime

  return currentTime > state.data?.sunrise && currentTime < state.data?.sunset
    ? './images/day.jpg'
    : './images/night.jpg'
}

export default useDayOrNightBackground
