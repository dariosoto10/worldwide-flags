import React, { useEffect, useCallback, useState } from 'react'
import { filterCountriesByName } from './utils'
import { Header } from './components/header'
import { Continent } from './components/continent'
import { BASE_URL } from './config'
import { GlobalStyle } from './Global'

function App() {
  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState([])

  const handleFilterCountries = (value) => {
    const countriesFiltered = filterCountriesByName(value)(countries)
    setFilterCountries(countriesFiltered)
  }

  const fetchCountries = useCallback(async () => {
    const response = await window.fetch(BASE_URL)
    const data = await response.json()
    setCountries(data)
  })

  useEffect(() => {
    fetchCountries()
  }, [fetchCountries()])

  return (
    <div className="App" style={{ position: 'relative' }}>
      <GlobalStyle />
      <Header filterCountries={handleFilterCountries} />
      <Continent
        countries={filterCountries.length ? filterCountries : countries}
      />
    </div>
  )
}

export default App
