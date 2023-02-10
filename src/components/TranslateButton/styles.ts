import styled from 'styled-components'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const Trigger = styled(DropdownMenu.Trigger)`
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

export const Content = styled(DropdownMenu.Content)`
    width: 7rem;
    border: 2px solid ${props => props.theme.colors.background};
    border-radius: 6px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
    cursor: pointer;
`

export const RadioItem = styled(DropdownMenu.RadioItem)`
    text-align: end;
    padding: 0.25rem 0.5rem;
`

export const ItemIndicator = styled(DropdownMenu.ItemIndicator)`
    position: absolute;
    left: 0;
    margin-left: 0.5rem;
`