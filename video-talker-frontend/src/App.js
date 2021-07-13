import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useEffect } from 'react';
import { connectWithWebSocket } from './utils/wssConnection/wssConnection';
import Dashboard from './Dashboard/Dashboard';
import LoginPage from './LoginPage/Login';
import routerdash from './routerdash';
import routerlogin from './routerlogin';

function App () {
  
  useEffect(() => {
    connectWithWebSocket();
  }, []);

  return (
    <Router>
      <Switch>
              <routerlogin path='/dashboard'>
                 <Dashboard />
              </routerlogin>
            <routerdash path='/'>
               <LoginPage />
            </routerdash >
      </Switch>
    </Router>
  );
}



export default App;
