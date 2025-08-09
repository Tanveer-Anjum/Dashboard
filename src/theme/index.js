import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
// import '@fontsource-variable/open-sans'
// import '@fontsource-variable/raleway'

const theme = extendTheme({
  fonts: {
    heading: `Ubuntu`,
    body:  "Ubuntu",
  },
  styles: {
    global: {
      'html, body': {
        bg: 'gray.200',
      },
    },
  },

},

  withDefaultColorScheme({ colorScheme: 'purple' }),
)

export default theme