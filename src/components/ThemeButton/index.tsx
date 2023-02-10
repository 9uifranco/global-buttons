import { Sun, Moon } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ThemeBtn } from './styles'

interface ThemeButtonProps {
    toggleTheme:() => void
}

export function ThemeButton({ toggleTheme }: ThemeButtonProps) {
    const { title } = useContext(ThemeContext)


    return (
        <ThemeBtn onClick={toggleTheme}>
            {
                (title === "light") ? <Sun size={20}/> : <Moon size={20}/>
            }
        </ThemeBtn>
        
    )
}