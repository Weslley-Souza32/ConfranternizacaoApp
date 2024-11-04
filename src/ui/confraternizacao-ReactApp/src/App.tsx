import Routes from "./Routes/Routes";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
