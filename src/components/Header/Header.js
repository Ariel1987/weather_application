import { useState } from 'react'
import CurrentLocation from './components/CurrentLocation/CurrentLocation'
import Search from './components/Search/Search'
import { BackButton, Button, SearchLocationWrapper } from './Header.styles'
import {
  useForecast,
  FETCHING_FORECAST_SUCCESS,
  SET_DAILY_FORECAST,
} from '../../context/forecast'
import { useLoading, LOADING, LOADING_ENDED } from '../../context/loading'
import fetchAppDataByLocation from '../../utils/fetchAppDataByLocation'

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const { dispatch: dispatchLoading } = useLoading()
  const {
    dispatch: dispatchForecast,
    state: { userSearch },
  } = useForecast()

  const handleShowSearchBar = () => {
    setShowSearchBar(true)
  }

  const handleBackButton = () => {
    dispatchLoading({ type: LOADING })
    try {
      fetchAppDataByLocation((data) => {
        dispatchForecast({ type: FETCHING_FORECAST_SUCCESS, payload: data })
        dispatchForecast({ type: SET_DAILY_FORECAST })
        dispatchLoading({ type: LOADING_ENDED })
      })
    } catch (error) {
      console.error(error)
      dispatchLoading({ type: LOADING_ENDED })
    }
  }

  return (
    <>
      {userSearch && (
        <BackButton onClick={handleBackButton}>
          <img src="./icons/back-arrow.png" alt="back-arrow" />
        </BackButton>
      )}
      <SearchLocationWrapper>
        {!showSearchBar && (
          <CurrentLocation onClick={() => handleShowSearchBar(true)} />
        )}
        <Search showSearchBar={showSearchBar} closeSearch={setShowSearchBar} />
        {!showSearchBar && (
          <Button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              handleShowSearchBar(true)
            }}
          >
            <img src="./icons/search.png" alt="search" />
          </Button>
        )}
      </SearchLocationWrapper>
    </>
  )
}

export default Header
