import React from 'react';
import './App.css';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      quotes: [],
      randomIndex: 0,
      currentColorIndex: 0,
      colors: ['#005064', '#6c083f', '#B1A07C', '#6fad1c']
    }
    this.setRandomIndex = this.setRandomIndex.bind(this);
  }

  componentDidMount() {
    this.fetchApiToEntries("https://type.fit/api/quotes");
  }

  fetchApiToEntries(apiToFetch) {
    fetch(apiToFetch)
        .then(result => result.json())
        .then((data) => {
            this.setState({
                quotes: data,
                fetching: false,
                randomIndex: Math.floor(Math.random() * data.length)
            });
        })
        .catch((error) => console.log(error));
  }

  setRandomIndex() {
    var newRandomIndex = this.getNewRandomIndex();
    var newRandomColorIndex = this.getNewRandomColorIndex();
    this.setState({
      randomIndex: newRandomIndex,
      currentColorIndex: newRandomColorIndex
    });
  }

  getNewRandomIndex() {
    let newRandomIndex = Math.floor(Math.random() * this.state.quotes.length);
    if (newRandomIndex === this.state.randomIndex) {
      newRandomIndex = this.getNewRandomIndex();
    }
    return newRandomIndex;
  }

  getNewRandomColorIndex() {
    let newRandomColorIndex = Math.floor(Math.random() * this.state.colors.length);
    if (newRandomColorIndex === this.state.currentColorIndex) {
      newRandomColorIndex = this.getNewRandomColorIndex();
    }
    return newRandomColorIndex;
  }
  


  render() {

    var content;
    if (this.state.fetching) {
      content = (<p>Loading quotes...</p>)
    }
    else {
      content = (
        <Quote 
          text={this.state.quotes[this.state.randomIndex].text} 
          author={this.state.quotes[this.state.randomIndex].author}
          color={this.state.colors[this.state.currentColorIndex]}
          setRandomIndex={this.setRandomIndex}
        />
      )
    }
    return (
      <div id='background-wrapper' style={{backgroundColor: this.state.colors[this.state.currentColorIndex]}}>
        <div id='content-container'>
          <div id="quote-box" 
            style={{color: this.state.colors[this.state.currentColorIndex]}}
          > 
            {content}
          </div>
        </div> 
      </div>
    );  
  }
}

export default App;
