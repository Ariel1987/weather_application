import reverseGeocodeApi from '../services/reverseGeocodeApi'
import weatherApi from '../services/weatherApi'

const fetchAppDataByLocation = (setAppData) => {
  const payload = {
    lat: null,
    lon: null,
  }

  if (!navigator.geolocation) {
    throw new Error('Geolocation not supported')
  }
  navigator.geolocation.getCurrentPosition(async (position) => {
    payload.lat = position.coords.latitude
    payload.lon = position.coords.longitude

    const weatherResult = await weatherApi(payload.lat, payload.lon)
    const geocodeResult = await reverseGeocodeApi(payload.lon, payload.lat)

    setAppData({
      weatherResult,
      geocodeResult
    })
  })
}

export default fetchAppDataByLocation
