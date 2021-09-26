import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from 'provider';
import { Footer, Header, Main } from 'components';
import { CoinDetails, CoinsList } from 'views';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route
              component={CoinsList}
              exact={true}
              path="/"
            />
            <Route
              component={CoinDetails}
              path="/coin/:id"
            />
          </Switch>
        </Main>
      </Router>
      <Footer />
    </AppProvider>
  );
}

export default App;
