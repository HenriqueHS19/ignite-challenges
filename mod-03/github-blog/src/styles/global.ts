import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        transition: all .3s;
    }

    body {
        background: ${props => props.theme["dark-blue-800"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem 'Nunito', sans-serif;
        color: ${props => props.theme["gray-100"]};
    }

    button {
        cursor: pointer;
    }


`;