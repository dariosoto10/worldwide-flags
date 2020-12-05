import { groupBy, prop, filter, compose, toLower } from 'rambda'

export const continents = [
  'Asia',
  'Europe',
  'Africa',
  'Oceania',
  'Americas'
]

const filterByContinentList = country =>
continents.includes(prop('region', country))

const matchByText = text => value => {
  const comparator = prop('name', value)
  return comparator && toLower(comparator).indexOf(toLower(text)) !== -1
}

export const groupCountriesByRegion = compose(
  groupBy(prop('region')),
  filter(filterByContinentList)
)

export const filterCountriesByName = text => filter(matchByText(text))

export const getBorderCountryNameByCode = countries => borders => countries.filter(country => borders.includes(country.alpha3Code))
