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
import fetchAppDataByLocation from './utils/fetchAppDataByLocation'

function App() {
  
  useEffect(() => {
    async function getGeocode() {
      try {
        const fetchedData = await fetchAppDataByCityName('london')  
        console.log(fetchedData)    
      } catch(error) {
        console.error(error)
      }
    }
    getGeocode()
  }, [])

  useEffect(() => {
    function getWeatherByLocation() {
      try {
        fetchAppDataByLocation((data) => {
          console.log(data)
        })
      } catch(error) {
        console.error(error)
      }      
    }
    getWeatherByLocation()
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
