# Worldwide Flags 🌎

This application is using the following API:
https://restcountries.eu/rest/v2/all

In order to list all countries and filter it to show some information 😱.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## `Components`

### `Continent`
The main component to list all countries by continent.
Receive: countries array.

### `Flag`
This component return a single flag with country name.
Receive: country information.

### `Header`
This component has a input that you can filter all countries
Receive: filterCountries function.

### `Modal`
This component render a country's information modal.
Recive:
    showModal boolean.
    handleCloseModal function.
    country object.
    getBorderCountry function.
    handleFavorite function.
    isFavorite boolean.

There are a couple of utilities on utils file using Functional Programming.


