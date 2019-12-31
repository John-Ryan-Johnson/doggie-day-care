import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import dogsData from '../helpers/data/dogsData';
import DogPen from '../components/DogPen/DogPen';

class App extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    const dogs = dogsData.getAllDogs();
    this.setState({ dogs });
  }

  render() {
    return (
      <div className="App">
        <DogPen dogs={this.state.dogs}/>
      </div>
    );
  }
}

export default App;
