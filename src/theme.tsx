import { extendTheme,ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Box } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";



const fonts = { body: 'Suisse Intl, sans-serif', mono: `'Menlo', monospace`, suise: "Suisse Intl, sans-serif" };

const breakpoints  = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)"
};

const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
                fontSize:"xs"
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
              ...activeLabelStyles,
              fontSize:"xs"
            },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top"
            }
          }
        }
      }
    }
  },
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    link: "#0F0F0F",
    main: "#393939",
    mainBg: "#fafafa",
    tabColor:"#616161",
    // main: {
    //   50: 'F4F3F1',
    //   100: '#0F0F0F',
    //   200: '#242424',
    // },
    grey: {
      100: "#fafafa",
      200: "#5F5F5F",
    },
    beige: {
      100: "#F4F3F1",
    },
    brand: "#6D1A36",
  },
  fonts,
  breakpoints,
});

export default theme;
