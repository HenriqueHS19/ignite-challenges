import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        transition: all .2s;
    }

    body {
        background: ${props => props.theme['white-200']};
        color: ${props => props.theme['brown-500']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    section {
        max-width: 70rem;
        margin: 0 auto;
    }
`;