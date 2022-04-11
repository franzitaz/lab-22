import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";
import Home from "./pages/home";
import { useState } from "react";

const App = () => {
  const [scroll, setScroll] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles isOpen={scroll} />
      <Home setScroll={setScroll} />
    </ThemeProvider>
  );
};

export default App;
