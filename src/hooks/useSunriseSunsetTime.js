import { useEffect, useState } from 'react'
import { useForecast } from '../context/forecast'

const useSunriseSunsetTime = () => {
  const { state } = useForecast()
  const [sunriseSunsetTime, setSunRiseSunsetTime] = useState({
    sunrise: null,
    sunset: null,
  })

  useEffect(() => {
    if (state.data && !state.error) {
      setSunRiseSunsetTime({
        sunrise: state.data?.sunrise,
        sunset: state.data?.sunset,
      })
    }
  }, [state])
  return sunriseSunsetTime
}

export default useSunriseSunsetTime
