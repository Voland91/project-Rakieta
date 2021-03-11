import { FC } from 'react';
import GlobalStyle from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/mainTheme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ContactPage } from '../components/templates/Contact/ContactPage';
import { ErrorPage } from '../components/templates/Error/ErrorPage';
import { EventsPage } from '../components/templates/Events/EventsPage';
import { HomePage } from '../components/templates/Home/HomePage';
import { Header } from '../components/organisms/Header/Header';

const App: FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/events">
            <EventsPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </>
);

export default App;
