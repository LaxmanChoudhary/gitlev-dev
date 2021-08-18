import React from "react";
import Root from "./pages/Root";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./components/layout";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Repos from "./components/Repos";
import Starred from "./components/Starred";
import Following from "./components/Following";
import About from "./components/About";

const theme = createTheme({
  typography: {
    fontFamily: '"Quicksand", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/gitlev/" component={Root} />
            <Route path="/gitlev/about" component={About} />
            <Route path="/gitlev/Repos" component={Repos} />
            <Route path="/gitlev/Starred" component={Starred} />
            <Route path="/gitlev/following" component={Following} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
