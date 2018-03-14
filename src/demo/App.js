import React from 'react';
import Header from './components/Header';
import Captain from './components/Captain';
import SelectAll from '../lib';
import './App.css';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      selectedCaptains: [],
    }

    this.captains = [
      {
        id: 1,
        name: 'James T. Kirk',
        ship: 'Enterprise (O freggin\' G)',
        badAssFactor: 10,
        quote: 'A little suffering is good for the soul.',
        imagePath: 'images/kirk.jpeg',
      },
      {
        id: 2,
        name: 'Hikaru Sulu',
        ship: 'Excelsior',
        badAssFactor: 8,
        quote: 'Fly her apart then!',
        imagePath: 'images/sulu.jpeg',
      },
      {
        id: 3,
        name: 'Jean-Luc Picard',
        ship: 'Enterprise',
        badAssFactor: 9,
        quote: 'Make it so...',
        imagePath: 'images/picard.jpg',
      },
      {
        id: 4,
        name: 'Benjamin Sisko',
        ship: 'Deep Space 9',
        badAssFactor: 9,
        quote: 'If you have something to say, SAY IT!',
        imagePath: 'images/sisko.jpeg',
      },
    ]
  }

  handleSelectAll = () => {
    const captainIds = this.captains.map(cap => cap.id);

    this.setState({
      selectedCaptains: this.state.selectedCaptains.length > 0 ? [] : captainIds,
    });
  }

  handleSelectOne = captainId => {
    const captainIdPresent = this.state.selectedCaptains.some(id => id === captainId);

    this.setState({
      selectedCaptains: captainIdPresent
        ? this.state.selectedCaptains.filter(id => id !== captainId)
        : [...this.state.selectedCaptains, captainId]
    })
  }

  render () {
    return (
      <div className="App">
        <Header />
        <label htmlFor="select-all">Select all Captains</label>
        <SelectAll
          id="select-all"
          items={this.captains}
          itemsSelected={this.state.selectedCaptains.length}
          onChange={this.handleSelectAll}
        />
        <div className="captains">
          {
            this.captains.map(captain => (
              <Captain
                key={captain.id}
                captain={captain}
                selected={this.state.selectedCaptains.some(id => id === captain.id)}
                onClick={this.handleSelectOne}
               />
              )
            )
          }
        </div>
      </div>
    );
  }
};

export default App;
