import styled from 'styled-components'

export const ThemeBtn = styled.button`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
    cursor: pointer;
    transition: scale 0.5s;

    &:active {
        scale: 0.8;
    }
`