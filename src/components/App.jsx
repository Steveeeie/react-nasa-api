import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import store from '../redux/store';
import theme from '../styled/theme';
import GlobalStyles from '../styled/GlobalStyles';
import Logo from '../styled/Logo';
import Page from '../styled/Page';
import HomePage from './HomePage';
import MediaPage from './MediaPage';

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Page>
            <Link to="/">
              <Logo />
            </Link>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/asset/:nasaid" component={MediaPage} />
              <Redirect to="/" />
            </Switch>
          </Page>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
