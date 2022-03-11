import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";

const App = () => {
  const config = {
    initialColorMode: "dark",
    useSystemColorMode: false
  };

  const theme = extendTheme({ config });

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
