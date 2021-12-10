import { useEffect } from 'react'
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

function App() {
  const { state: { loading }, dispatch: dispatchLoading } = useLoading()
  const { dispatch: dispatchForecast } = useForecast()

  useEffect(() => {
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
  }, [dispatchLoading, dispatchForecast])

  return (
    <>
      <Wrapper>
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
      <Footer />
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
