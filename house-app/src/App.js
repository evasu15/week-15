import React, { Component } from 'react';
import { HousesList } from './components/HousesList';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
    </React.Fragment>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <HousesList />
      </div>
    )
  }
}

export default App;


