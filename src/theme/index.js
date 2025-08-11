import { extendTheme, Input, Textarea, withDefaultColorScheme } from '@chakra-ui/react'
import { BiBorderRadius } from 'react-icons/bi'

const theme = extendTheme(
  {
    fonts: {
      heading: 'Ubuntu',
      body: 'Ubuntu',
    },
    styles: {
      global: {
        'html, body': {
          bg: 'gray.200',
        },
      },
    },
    components: {
      FormLabel: {
        baseStyle: {
          fontSize: 'sm', // This will now apply

        },
      },
      Input: {
        variants: {
          outline: {
            field: {
              h: "38px",
              BiBorderRadius: '8px',
              fontSize: 'sm',
              _focus: {
                boxShadow: '0 0 0 1px purple'
              }
            }

          }

        }


      },
     Textarea  : {
        variants: {
          outline: {
           
              h: "38px",
              BiBorderRadius: '8px',
              fontSize: 'sm',
              _focus: {
                boxShadow: '0 0 0 1px purple'
              
            }

          }

        }


      }

    },
  },
  withDefaultColorScheme({ colorScheme: 'purple' })
)

export default theme
