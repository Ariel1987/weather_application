import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import CurrentTemperature from './components/CurrentTemperature/CurrentTemperature'
import CurrentDate from './components/CurrentDate/CurrentDate'
import CurrentWeatherConditions from './components/CurrentWeatherConditions/CurrentWeatherConditions'
import Footer from './components/Footer/Footer'
import {
  CurrentWeatherConditionsWrapper,
  CurrentWeatherDateWrapper,
  HeaderWrapper,
  Wrapper,
  Modal
} from './App.styles'
import fetchAppDataByLocation from './utils/fetchAppDataByLocation'
import { useLoading, LOADING, LOADING_ENDED } from './context/loading'
import { useForecast, FETCHING_FORECAST_SUCCESS } from './context/forecast'
import useDayOrNightBackground from './hooks/useDayOrNightBackground'

const duration = 1000 * 60 * 60

function App() {
  const { state: { loading }, dispatch: dispatchLoading } = useLoading()
  const { dispatch: dispatchForecast } = useForecast()
  const [dayOrNight, setDayOrNight] = useState()
  let dayTime = useDayOrNightBackground()

  useEffect(() => {
    const interval = setInterval(() => {
      getWeatherByLocation()  
    }, duration)
    
    function getWeatherByLocation() {
      dispatchLoading({ type: LOADING })
      try {
        fetchAppDataByLocation((data) => {
          dispatchForecast({ type: FETCHING_FORECAST_SUCCESS, payload: data })
          dispatchLoading({ type: LOADING_ENDED })
        })
      } catch(error) {
        console.error(error)
        dispatchLoading({ type: LOADING_ENDED })
      }      
    }
    getWeatherByLocation()
    
    return () => interval
  }, [dispatchLoading, dispatchForecast])

  useEffect(() => {
    if (dayTime !== dayOrNight) {
      setDayOrNight(dayTime)
    }
  }, [dayOrNight, dayTime])

  return (
    <>
      <Wrapper imgUrl={dayOrNight}>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <CurrentWeatherDateWrapper>
          <CurrentTemperature />
          <CurrentDate />
        </CurrentWeatherDateWrapper>
        <CurrentWeatherConditionsWrapper>
          <hr />
          <CurrentWeatherConditions />
        </CurrentWeatherConditionsWrapper>
      </Wrapper>
      <Footer/>
      {loading && (
        <Modal loading={loading}>
          <img src="./images/loading.svg" alt="loading" />
        </Modal>
      )}
      {/* <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </>
  )
}

export default App
