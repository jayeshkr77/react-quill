import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {text : ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value){
    this.setState({text:value})
  }
  render() {
    return (
      <div className="App">
        <ReactQuill value={this.state.text} onChange={this.handleChange}></ReactQuill>
      </div>
    );
  }
}

export default App;
