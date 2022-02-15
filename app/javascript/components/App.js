import React from "react"
import Greeting from './Greeting';
import { useDispatch, useSelector, Provider } from 'react-redux';
import store from '../redux/configStore';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <div className="App">
            <header>
                <span>Click the link to see a random </span>
                <Link to="/greeting">greeting</Link>
            </header>
            <Routes>
              <Route path='/greeting' element={< Greeting />}></Route>
            </Routes>
          </div>
        </Router>
      </Provider>
    </React.Fragment>
  );
  
}

export default App
