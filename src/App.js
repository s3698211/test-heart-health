import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavRoute from "./components/Nav";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import HealthBlogPage from "./pages/HealthyBlogPage";
import "./bootstrap-4.3.1-dist/css/bootstrap.min.css";

import withVerifyToken from "./HOC/withVei";
const theme = {};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App"></div>
        <Switch>
          {/* <Route path="/">
            <div>meo</div>
          </Route> */}
          <NavRoute exact path="/" component={HomePage} />
          <NavRoute path="/healthy-blogs" component={HealthBlogPage} />
          <Route path="/login" component={LoginPage} />
          <NavRoute path="/protected" component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default withVerifyToken(App);
