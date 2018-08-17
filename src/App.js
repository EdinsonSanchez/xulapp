import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Spritesheet from 'react-responsive-spritesheet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Spritesheet
          className={`my-element__class--style`}
          image={`https://raw.githubusercontent.com/danilosetra/react-responsive-spritesheet/master/assets/images/examples/sprite-image-horizontal.png`}
          widthFrame={420}
          heightFrame={500}
          steps={14}
          fps={10}
          autoplay={true}
          loop={true}
        />
      </div>
    );
  }
}

export default App;




