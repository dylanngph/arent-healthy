import { extendTheme } from "@chakra-ui/react";

//Color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

//Size Config
const sizes = {
  container: {
    sm: "640px",
    md: "768px",
    lg: "960px",
    xl: "1280px",
  },
}

// Extend the theme to include custom colors
const colors = {
  primary: {
    300: '#FFCC21',
    400: '#FF963C',
    500: '#EA6C00',
  },
  primary_gradient: {
    fill: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
    
  },
  secondary: {
    300: '#8FE9D0',
  },
  dark: {
    400: '#777',
    500: '#414141',
    600: '#2E2E2E',
  }
};

export const chakra_theme = extendTheme({
  config,
  colors,
  sizes,
  fonts: {
    heading: `'Noto Sans JP', 'Inter' , sans-serif`,
    body: `'Inter' , sans-serif`,
  },
  styles: {
    global: {
      body: {
        color: '#414141',
        WebkitTapHighlightColor: "transparent",
      },
    },
  },
  components:{
    Text: {
      variants: {
        'inter': {
          fontFamily: 'Inter',
        },
        'noto': {
          fontFamily: 'Noto Sans JP',
        }
      }
    },
    Button: {
      baseStyle: {
        fontFamily: "'Noto Sans JP'",
      }
    },
    Popover: {
      baseStyle: {
        content: {
          bg: '#777777',
          bgImage: 'none'
        }
      }
    }
  }
});

export default chakra_theme;
