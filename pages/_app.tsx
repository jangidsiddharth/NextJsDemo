import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import LayoutPage from "../components/layout/Layout";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <LayoutPage>
          <Component {...pageProps} />
        </LayoutPage>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
