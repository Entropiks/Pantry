import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/Login';
import Dash from './Components/Dash';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="App-body">
          { /* move to seperate handler */ }
          <Route path ="/" exact component={Login} />
          <Route path ="/dash" component={Dash} />
          
        </div>
      </div>
    </Router>
  );
}

export default App;
