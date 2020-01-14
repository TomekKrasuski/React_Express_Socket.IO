import React, { Component } from 'react';
import { subscribeToTimer, testData } from './api';

class App extends Component {
  constructor(props) {
    super(props);

    subscribeToTimer((err, timestamp) => {
      this.setState({
        timestamp,
      });
    });

    testData((err, secondaryTime) => {
      this.setState({
        secondaryTime,
      });
    });
  }

  state = {
    secondaryTime: 'no timestamp yet',
    timestamp: 'no timestamp yet',
  };

  render() {
    return (
      <div className='App'>
        <p className='App-intro'>
          This is the value of the timer timestamp: {this.state.timestamp}
          <br />
          And this is secondary timestamp : {this.state.secondaryTime}
        </p>
      </div>
    );
  }
}

export default App;
