import React from "react"
import Greeting from './Greeting';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <div className="App">
            <header>
                <span>Clicl the link to see a random </span>
                <Link to="/greeting">greeting</Link>
            </header>
            <Routes>
              <Route exact path='/greeting' element={< Greeting />}></Route>
            </Routes>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App
