import { Header } from "./components/Header";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { RepositoryContainer } from "./components/RepositoryContainer";

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  pushed_at: string;
  archived: boolean;
  allow_forking: boolean;
  has_pages: boolean;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <RepositoryContainer />
    </ThemeProvider>
  );
}

export default App;
