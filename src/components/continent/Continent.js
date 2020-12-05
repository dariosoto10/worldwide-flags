import React, { useEffect, useState } from 'react'
import { groupCountriesByRegion, getBorderCountryNameByCode } from '../../utils'
import { ContinentsWrapper, ContinentWrapper, Title } from './styles'
import { CountryModal } from '../modal'
import { Flag } from '../flag'

export const Continent = ({ countries }) => {
  const [countriesByContinent, setCountriesByContinent] = useState([])
  const [favorites, setFavorites] = useState([])
  const [countrySelected, setCountrySelected] = useState()
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = (country) => {
    setCountrySelected(country)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setCountrySelected()
  }

  const handleFavorite = (country) => {
    const { alpha3Code } = country
    favorites.includes(alpha3Code)
      ? setFavorites(favorites.filter((fav) => fav !== alpha3Code))
      : setFavorites([...favorites, alpha3Code])
  }

  const getBorderCountry = getBorderCountryNameByCode(countries)

  useEffect(() => {
    if (countries.length) {
      setCountriesByContinent(groupCountriesByRegion(countries))
    }
  }, [countries])

  return (
    <ContinentsWrapper>
      {Object.keys(countriesByContinent).map((key) => (
        <ContinentWrapper key={key}>
          <Title>{key}</Title>
          {countriesByContinent[key].map((country) => (
            <Flag
              key={country.name}
              country={country}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </ContinentWrapper>
      ))}
      <CountryModal
        showModal={showModal}
        country={countrySelected}
        handleFavorite={handleFavorite}
        getBorderCountry={getBorderCountry}
        handleCloseModal={handleCloseModal}
        isFavorite={favorites.includes(countrySelected?.alpha3Code)}
      />
    </ContinentsWrapper>
  )
}
