import React, {Component} from 'react';
import './App.css';

function App() {
  return (
    <div>
        <Clock />
    </div>
  );
}

class Clock extends Component {
  state = {
    time: new Date(),
    name: "User",
    question: "What is your Name ?",
    flag: "1",
    mood: ""
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  handleChange = (e) => {
    this.state.flag == "1" ? 
    this.setState({
      name: e.target.value
    })
    :
    this.setState({
      mood: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      question: "How are you feeling today?",
      flag: "0"
    })
    e.target.text.value = ""
  }

  render() {
    return (
      <div class= "container">
        <h1>{this.state.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h1>
        <h2>Good Evening, {this.state.name}</h2>
        <h2>{this.state.question}</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" onChange={this.handleChange} class="name-input"></input>
        </form>
        
      </div>
    );
  }
}

export default App;
