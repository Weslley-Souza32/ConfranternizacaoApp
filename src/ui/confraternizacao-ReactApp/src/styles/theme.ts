import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    blue: {
      "900": "#001",
    },
  },
  fonts: {
    body: "Nunito, sans-serif",
    heading: "Nunito, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "blue.900",
        color: "gray.50",
      },
    },
  },
});
