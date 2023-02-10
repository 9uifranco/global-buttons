import { useTranslation } from 'react-i18next'
import { ThemeProvider } from 'styled-components'
import { TranslateButton } from './components/TranslateButton'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import { GlobalStyle } from './styles/global'
import { ThemeButton } from './components/ThemeButton'
import { useState } from 'react'

export function App() {
  const { t } = useTranslation()

  const [theme, setTheme] = useState(light)

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <TranslateButton/>
      <ThemeButton toggleTheme={toggleTheme}/>
      <h1>{t('Welcome')}</h1>
    </ThemeProvider>
  )
}
