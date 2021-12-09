import weatherApi from '../services/weatherApi'
import geocodeApi from '../services/geocodeApi'

const fetchAppDataByCityName = async (cityName) => {
  const payload = {
    lat: null,
    lon: null,
    cityName: null
  }

  try {
    const geocodeResult = await geocodeApi(cityName)
    payload.lon = geocodeResult.data.features[0].center[0]
    payload.lat = geocodeResult.data.features[0].center[1]
    payload.cityName = geocodeResult.data.features[0].text
    
    const weatherResult = await weatherApi(payload.lat, payload.lon)
    console.log(geocodeResult)
    console.log(weatherResult)
    console.log(payload)

  } catch(error) {
    throw new Error(error)
  }

}

export default fetchAppDataByCityName
