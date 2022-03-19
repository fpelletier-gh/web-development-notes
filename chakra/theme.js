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
    },
  },
};

const Code = {
  baseStyle: {},
};

const global = {
  p: {
    pb: "1.1rem",
  },
};

const theme = extendTheme({
  components: {
    Container,
    Link,
    Code,
  },
  config,
  styles: {
    global,
  },
});
export default theme;
