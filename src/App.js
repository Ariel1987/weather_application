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
} from './App.styles'
import fetchAppDataByCityName from './utils/fetchAppDataByCityName'

function App() {

  useEffect(() => {
    async function getGeocode() {
      await fetchAppDataByCityName('london')      
    }
    getGeocode()
  }, [])

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
      {/* {loading && (
        <Modal loading={loading}>
          <img src="./images/loading.svg" alt="loading" />
        </Modal>
      )}
      <ToastContainer
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
