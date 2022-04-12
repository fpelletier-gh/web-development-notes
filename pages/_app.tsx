import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../chakra/theme";
import "../styles/prism-material-dark.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
