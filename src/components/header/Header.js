import React, { useState } from 'react'
import { HeaderWrapper } from './styles'

export const Header = ({ filterCountries }) => {
  const [valueToSearch, setValueToSearch] = useState('')

  const handleValueToSearch = (e) => {
    const value = e.target.value

    setValueToSearch(value)
    filterCountries(value)
  }

  return (
    <HeaderWrapper>
      <input
        value={valueToSearch}
        onChange={handleValueToSearch}
        placeholder="Search"
      />
    </HeaderWrapper>
  )
}
