import { useForecast } from "../../../../context/forecast"

const MinMaxTemperature = () => {
  const { state } = useForecast()

  return (
    <div>
      <img src="./icons/termometro.png" alt="termometro" />
      <p>min {state.data?.min}º</p>
      <p>max {state.data?.max}º</p>
    </div>
  )
}

export default MinMaxTemperature
