import { CssBaseline, ThemeProvider, createTheme } from "@material-ui/core";
import Despesas from "./Despesas";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7b1fa2",
      light: "#ae52d4",
      dark:"#4a0072",
    },
    secondary: {
      main: "#00838f",
    },
  },
});

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Despesas></Despesas>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
