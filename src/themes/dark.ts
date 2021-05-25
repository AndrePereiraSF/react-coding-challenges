import { Colors } from '../styles/variable'
import { DefaultTheme } from 'styled-components'

const dark: DefaultTheme = {
  title: 'dark',

  colors: {
    title: Colors.PRIMARY_DARK,

    primary: Colors.PRIMARY_DARK,
    primaryHover: Colors.PRIMARY_DARK_ALT,

    secondary: Colors.SECONDARY_DARK,
    secondaryHover: Colors.SECONDARY_DARK_ALT,

    inputBackground: Colors.WHITE_OPACITY,
    inputColor: Colors.WHITE,
    inputPlaceholderColor: Colors.WHITE,

    buttonColor: Colors.BLACK,

    background: Colors.BACKGROUND_DARK,
    text: Colors.WHITE,
  },
}

export default dark
