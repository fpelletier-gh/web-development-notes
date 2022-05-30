import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "system",
};

const Container = {
  baseStyle: {
    w: "100%",
    mx: "auto",
    maxW: "1200px",
    px: "0",
    pb: [2, 4],
    pt: "0",
  },
  defaultProps: {
    colorScheme: "gray",
  },
};

const Button = {
  baseStyle: {
    letterSpacing: "widest",
  },
  variants: {
    link: (props) => ({
      fontSize: "xl",
      fontWeight: "semibold",
      _hover: {
        textDecoration: "none",
        color: mode("blue.600", "blue.300")(props),
      },
    }),
    submit: (props) => ({
      fontSize: "xl",
      fontWeight: "semibold",
      border: "1px solid",
      borderColor: mode("blue.600", "blue.300")(props),
      color: mode("blue.600", "blue.300")(props),
      _hover: {
        backgroundColor: mode("gray.200", "gray.700")(props),
      },
    }),
    transparent: (props) => ({
      fontSize: "xl",
      fontWeight: "semibold",
      color: mode("gray.600", "gray.700")(props),
      _hover: {
        textDecoration: "none",
        color: mode("blue.600", "blue.300")(props),
      },
    }),
  },
};

const Heading = {
  baseStyle: (props) => ({
    letterSpacing: "base",
    fontFamily: "'Roboto flex', sans-serif",
  }),
  variants: {
    blue: (props) => ({
      color: mode("blue.600", "blue.300")(props),
    }),
  },
  defaultProps: {
    variant: "blue",
  },
};

const Link = {
  baseStyle: (props) => ({
    letterSpacing: "wider",
    textDecoration: "none",
    fontWeight: "semibold",
  }),
  variants: {
    navigation: (props) => ({
      _hover: {
        textDecoration: "none",
        borderColor: mode("blue.600", "blue.300")(props),
        color: mode("blue.600", "blue.300")(props),
      },
    }),
    logo: {
      _hover: {
        textDecoration: "none",
      },
    },
  },
};

const Text = {
  baseStyle: {
    pb: "1.1rem",
  },
  variants: {
    Blue: (props) => ({
      _hover: {
        color: mode("blue.600", "blue.300")(props),
      },
    }),
  },
};

const Code = {
  baseStyle: {
    borderRadius: "sm",
    overflowY: "auto",
  },
};

const global = (props) => ({
  "html, body": {
    letterSpacing: "wider",
    lineHeight: "tall",
    fontFamily: "'Roboto flex', sans-serif",
  },
  a: {
    letterSpacing: "widest",
    textDecoration: "none",
    _hover: {
      textDecoration: "none",
      borderColor: mode("blue.600", "blue.300")(props),
      color: mode("blue.600", "blue.300")(props),
    },
  },
});

const theme = extendTheme({
  components: {
    Container,
    Button,
    Link,
    Code,
    Heading,
    Text,
  },
  config,
  styles: {
    global,
  },
});
export default theme;
