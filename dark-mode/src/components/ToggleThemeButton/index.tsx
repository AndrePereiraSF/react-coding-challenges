import React, { useContext } from 'react'
import { ToggleButton } from './style'
import dark from '../../themes/dark'
import light from '../../themes/light'
import ThemeContext from '../../contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const ToggleThemeButton: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    if (theme.title === 'light') setTheme(dark)
    else setTheme(light)
  }

  return (
    <ToggleButton onClick={toggleTheme}>
      <FontAwesomeIcon
        icon={theme.title === 'light' ? faMoon : faSun}
        color={theme.title === 'light' ? '#000' : '#FFA500'}
      />
    </ToggleButton>
  )
}

export default ToggleThemeButton
