import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      title: string

      primary: string
      primaryHover: string
      secondary: string
      secondaryHover: string

      inputBackground: string
      inputColor: string
      inputPlaceholderColor: string

      buttonColor: string

      background: string
      text: string
    }
  }
}
