import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        transition: background-color 1s;
        background-color: ${props => props.theme.colors.background};
    }

    h1 {
        color: ${props => props.theme.colors.primary};
    }
`