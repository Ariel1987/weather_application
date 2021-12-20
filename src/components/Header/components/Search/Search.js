import { useState } from 'react'

import PropTypes from 'prop-types'
import {
  Input,
  CloseButton,
  InputWrapper,
  ButtonGroup,
  SearchButton,
} from './Search.styles'
import { useLoading, LOADING, LOADING_ENDED } from '../../../../context/loading'
import {
  useForecast,
  FETCHING_FORECAST_BY_LOCATION_SUCCESS,
  FETCHING_FORECAST_ERROR,
  SET_DAILY_FORECAST,
} from '../../../../context/forecast'
import fetchAppDataByCityName from '../../../../utils/fetchAppDataByCityName'
import { toast } from 'react-toastify'

const Search = ({ showSearchBar, closeSearch }) => {
  const [city, setCity] = useState('')
  const { dispatch: dispatchLoading } = useLoading()
  const { dispatch: dispatchForecastData } = useForecast()

  const handleSearchCity = async (event) => {
    event.preventDefault()
    dispatchLoading({ type: LOADING })

    try {
      const response = await fetchAppDataByCityName(city)
      dispatchForecastData({ type: FETCHING_FORECAST_BY_LOCATION_SUCCESS, payload: response })
      dispatchForecastData({ type: SET_DAILY_FORECAST })
      dispatchLoading({ type: LOADING_ENDED })
    } catch(error) {
      dispatchForecastData({ type: FETCHING_FORECAST_ERROR })
      dispatchLoading({ type: LOADING_ENDED })
      toast.error(error)
    }
    closeSearch(false)
    setCity('')
  }

  if (!showSearchBar) return null

  return (
    <form onSubmit={handleSearchCity}>
      <InputWrapper>
        <Input
          type="text"
          id="city"
          placeholder="Type city name"
          onChange={(event) => setCity(event.target.value)}
          value={city}
          autoFocus={true}
        />
        <ButtonGroup>
          {!!city ? (
            <>
              <SearchButton type="submit">
                <img src="./icons/search.png" alt="search" />
              </SearchButton>
              <CloseButton type="button" onClick={() => setCity('')}>
                X
              </CloseButton>
            </>
          ) : (
            <CloseButton type="button" onClick={() => closeSearch(false)}>
              X
            </CloseButton>
          )}
        </ButtonGroup>
      </InputWrapper>
    </form>
  )
}

Search.propTypes = {
  showSearchBar: PropTypes.bool.isRequired,
  closeSearch: PropTypes.func.isRequired,
}

export default Search
