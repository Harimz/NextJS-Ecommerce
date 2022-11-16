import { extendTheme } from "@chakra-ui/react";
import * as foundations from "./foundations";
import { Button } from "./components";
import breakpoints from "./breakpoints";

const theme = extendTheme({
  fonts: {
    body: `'Montserrat', sans-serif`,
  },
  ...foundations,
  components: {
    Button,
  },
  breakpoints,
});

export default theme;
