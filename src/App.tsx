import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import ThemeContext from './contexts/ThemeContext'
import GlobalStyle from './styles/GlobalStyle'
import Loading from './components/Loading'
import Routes from './Routes'

import light from './themes/light'

export const App: React.FC = () => {
  const getCurrentTheme = () => {
    const currentTheme = JSON.parse(localStorage.getItem('theme') || '{}')

    if (currentTheme.title) return currentTheme
    else return light
  }

  const [theme, setTheme] = useState(getCurrentTheme)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        {isLoading && <Loading />}
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
