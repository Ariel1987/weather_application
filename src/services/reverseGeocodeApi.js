import api from '../config/axios/axios'

const reverseGeocodeApi = async (lon, lat) => {
  const url =`https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?types=place&access_token=pk.eyJ1IjoiYXJpZWwxOTg3IiwiYSI6ImNrdzd3NTFwdzl0N2szMXMxMXlkZHJ1ZXAifQ.h4t9jUrDVWo84AIn0Se7cA&limit=1`
  return await api.get(url)
}

export default reverseGeocodeApi
