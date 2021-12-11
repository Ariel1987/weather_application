import { useForecast } from "../../../../context/forecast"

const CurrentLocation = () => {
  const { state } = useForecast()

  return <p>{state.data?.cityName}</p>
}

export default CurrentLocation
