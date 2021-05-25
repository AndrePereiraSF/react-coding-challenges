import { Colors } from '../styles/variable'
import { DefaultTheme } from 'styled-components'

const light: DefaultTheme = {
  title: 'light',

  colors: {
    title: Colors.BLACK_ALT,

    primary: Colors.PRIMARY,
    primaryHover: Colors.PRIMARY_ALT,

    secondary: Colors.SECONDARY,
    secondaryHover: Colors.SECONDARY_ALT,

    inputBackground: Colors.WHITE,
    inputColor: Colors.BLACK,
    inputPlaceholderColor: Colors.GRAY,

    buttonColor: Colors.WHITE,

    background: Colors.BACKGROUND,
    text: Colors.BROWN,
  },
}

export default light
