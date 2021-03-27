import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { A11yContextProvider, Flex, View, Heading } from 'ada-design';
import styled from 'styled-components';

import './App.css';
import Sidebar from './components/Sidebar';
import StoriesList from './components/StoriesList';
import NavBar from './components/NavBar';

const isDev = (): boolean => {
  return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
};

const HomeScreen = () => {
  return (
    <Screen>
      <Sidebar />
      <View marginX={32}>
        <StoriesList />
        <Heading size={900} color="white">
          Feed :)
        </Heading>
      </View>
      <Flex width={250}>To be implemented</Flex>
    </Screen>
  );
};

function App() {
  return (
    <A11yContextProvider isEnabled={isDev()}>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/watch">
              <Heading size={900} color="white" textAlign="center">
                Watch
              </Heading>
            </Route>
            <Route exact path="/marketplace">
              <Heading size={900} color="white" textAlign="center">
                Marketplace
              </Heading>
            </Route>
            <Route exact path="/groups">
              <Heading size={900} color="white" textAlign="center">
                Groups
              </Heading>
            </Route>
            <Route exact path="/games">
              <Heading size={900} color="white" textAlign="center">
                Games
              </Heading>
            </Route>

            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    </A11yContextProvider>
  );
}

const Screen = styled(Flex)`
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px;
  background-color: #191a1b;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default App;
