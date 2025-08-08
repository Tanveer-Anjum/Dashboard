import { extendTheme } from '@chakra-ui/react'
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

})

export default theme