import { extendTheme } from "@chakra-ui/react";
import * as foundations from "./foundations";

const theme = extendTheme({
  fonts: {
    body: `'Montserrat', sans-serif`,
  },
  ...foundations,
});

export default theme;
