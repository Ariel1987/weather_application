import { useForecast } from "../../../../context/forecast"

const Humidity = () => {
  const { state } = useForecast()

  return (
    <div>
      <img src="./icons/humidity.png" alt="humidity" />
      <p>{state.data?.humidity}%</p>
    </div>
  )
}

export default Humidity
