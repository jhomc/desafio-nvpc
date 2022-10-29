import { Header } from "./components/Header";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { RepositoryList } from "./components/RepositoryList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <RepositoryList />
    </ThemeProvider>
  );
}

export default App;
