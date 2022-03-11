import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "system",
};

const Container = {
  baseStyle: {
    w: "100%",
    mx: "auto",
    maxW: "1200px",
    px: [4, 6],
    py: [8, 10],
  },
  defaultProps: {
    colorScheme: "gray",
  },
};

const Link = {
  baseStyle: {
    textDecoration: "none",
    _hover: {
      textDecoration: "none",
      // fontWeight: "bold",
    },
  },
};

const global = {
  ".md-wrapper": {
    h1: {
      fontSize: "xl",
      mb: "4",
    },
    a: {
      textDecoration: "none",
      _hover: {
        textDecoration: "none",
        // fontWeight: "bold",
      },
    },
  },
};

const theme = extendTheme({
  components: {
    Container,
    Link,
  },
  config,
  styles: {
    global,
  },
});
export default theme;
