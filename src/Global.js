import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    font-size: 16px;
    box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
		position: relative;
		font-family: Roboto;
	}

	main {
		width: 90%;
		margin: 0 auto;
	}
`
