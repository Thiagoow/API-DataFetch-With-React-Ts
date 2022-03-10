import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import Home from "./pages/Home";

const App = () => {
  const config = {
    initialColorMode: "dark",
    useSystemColorMode: false
  };

  const theme = extendTheme({ config });

  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
};

export default App;
