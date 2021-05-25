import { createContext, Dispatch, SetStateAction } from 'react'
import { DefaultTheme } from 'styled-components'
import light from '../themes/light'

interface DefaultState {
  theme: DefaultTheme
  setTheme: Dispatch<SetStateAction<DefaultTheme>>
}

const defaultState = {
  theme: light,
  setTheme: () => true,
}

const ThemeContext = createContext<DefaultState>(defaultState)

export default ThemeContext
