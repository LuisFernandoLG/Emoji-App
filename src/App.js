import "normalize.css";
import GlobalStyle from "./styles/GlobalStyle";
import MainTitle from "./components/MainTitle";
import { ThemeProvider } from "styled-components";
import { EmojiBoard } from "./components/EmojiBoard";
import theme from "./styles/theme";
import { RepositoryLink } from "./components/RepositoryLink";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MainTitle />
        <EmojiBoard />
        <RepositoryLink />
      </ThemeProvider>
    </div>
  );
}

export default App;
