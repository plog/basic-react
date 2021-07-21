import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Layout from "./components/Layout";
import { maintheme, mainstyle } from "./mainstyle";

export default function App() {
  const style = mainstyle();
  return (
    <ThemeProvider theme={maintheme}>
      <Router>
        <Layout style={style}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
