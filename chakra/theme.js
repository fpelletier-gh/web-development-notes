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
  },
};

const Link = {
  baseStyle: (props) => ({
    letterSpacing: "widest",
    textDecoration: "none",
    _hover: {
      textDecoration: "none",
      color: mode("blue.600", "blue.300")(props),
    },
  }),
};

const Code = {
  baseStyle: {
    borderRadius: "md",
    mb: "0.2rem",
    display: "block",
    whiteSpace: "pre",
    "overflow-y": "auto",
  },
};

const Heading = {
  baseStyle: { fontSize: "xl" },
};

const global = (props) => ({
  "html, body": {
    letterSpacing: "wider",
    lineHeight: "tall",
  },
  p: {
    pb: "1.1rem",
  },
  h2: {
    fontSize: "4xl",
    color: mode("blue.600", "blue.300")(props),
    pb: "1rem",
  },
  h5: {
    color: mode("blue.600", "blue.300")(props),
  },
});

const theme = extendTheme({
  components: {
    Container,
    Button,
    Link,
    Code,
    Heading,
  },
  config,
  styles: {
    global,
  },
});
export default theme;
