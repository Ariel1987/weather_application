import { useEffect, useState } from 'react'
import { useForecast } from '../context/forecast'

const useSunriseSunsetTime = () => {
  const { state } = useForecast()
  const [sunriseSunsetTime, setSunRiseSunsetTime] = useState([])
  
  useEffect(() => {
    if (state.data && !state.error) {
      const timeData = state.data?.daily.map(timeData => {
        return {
          sunrise: timeData.sunrise,
          sunset: timeData.sunset,
          dateTime: timeData.dt
        }
      })
      setSunRiseSunsetTime(timeData)
    }
  }, [state])
  return sunriseSunsetTime
}

export default useSunriseSunsetTime
