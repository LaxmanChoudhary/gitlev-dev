import React from "react";
import Root from "./pages/Root";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./components/layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Repos from "./components/Repos";
import Starred from "./components/Starred";
import Following from "./components/Following";
import About from "./components/About";
import { yellow } from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    fontFamily: '"Quicksand", sans-serif',
  },
  palette: {
    yellowish: {
      light: yellow[300],
      main: yellow[400],
      dark: yellow[500],
      contrastText: "#fff"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/gitlev-dev/" component={Root} />
            <Route path="/gitlev-dev/about" component={About} />
            <Route path="/gitlev-dev/Repos" component={Repos} />
            <Route path="/gitlev-dev/Starred" component={Starred} />
            <Route path="/gitlev-dev/following" component={Following} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
