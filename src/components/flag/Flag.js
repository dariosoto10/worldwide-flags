import React from 'react'
import { FlagWrapper } from './styles'

export const Flag = ({ country, handleOpenModal }) => {
  const { name, flag } = country

  return (
    <FlagWrapper
      onClick={() => {
        handleOpenModal(country)
      }}
    >
      <img src={flag} alt={name} />
      <span>{name}</span>
    </FlagWrapper>
  )
}
