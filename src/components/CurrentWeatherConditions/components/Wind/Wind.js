import { useForecast } from "../../../../context/forecast"

const Wind = () => {
  const { state } = useForecast()

  return (
    <div>
      <img src="./icons/wind.png" alt="wind" />
      <p>{state.data?.wind} km/h</p>
    </div>
  )
}

export default Wind
