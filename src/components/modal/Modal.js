import React from 'react'
import { CloseIcon } from '../../assets'
import {
  CloseModalButton,
  ModalWrapper,
  ModalContent,
  Title,
  SubTitle,
  FavoriteIcon,
} from './styles'
import { useSpring, animated, config } from 'react-spring'

export const CountryModal = ({
  showModal,
  handleCloseModal,
  country,
  getBorderCountry,
  handleFavorite,
  isFavorite,
}) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    config: config.slow,
  })

  if (!country) return null

  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <ModalContent>
          <div>
            <Title>
              {country?.name}
              <FavoriteIcon
                className={`fa${isFavorite ? 's' : 'r'} fa-star`}
                onClick={() => {
                  handleFavorite(country)
                }}
              />
            </Title>
            <SubTitle>
              Region: <span>{country?.region}</span>
            </SubTitle>
            <SubTitle>
              Population: <span>{country?.population}</span>
            </SubTitle>
            <SubTitle>
              Capital: <span>{country?.capital}</span>
            </SubTitle>
            <SubTitle>
              Currency:{' '}
              <span>
                {country.currencies.map(({ name }) => name).join(', ')}
              </span>
            </SubTitle>
            <SubTitle>
              Language:{' '}
              <span>
                {country.languages.map(({ name }) => name).join(', ')}
              </span>
            </SubTitle>
            <SubTitle>
              Border Countries:{' '}
              <span>
                {getBorderCountry(country.borders).length
                  ? getBorderCountry(country.borders)
                      .map(({ nativeName }) => nativeName)
                      .join(', ')
                  : 'There are no border countries.'}
              </span>
            </SubTitle>
          </div>
          <div>
            <img src={country?.flag} alt={country?.translations?.nativeName} />
          </div>
        </ModalContent>
        <CloseModalButton onClick={handleCloseModal}>
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  )
}
