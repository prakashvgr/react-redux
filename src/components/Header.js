import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';
import logo from './logo.svg';
import './Header.css';

class App extends Component {

  handleSave = text => {
    if(text.length !== 0)
      this.props.addTodo(text);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <TodoTextInput
            newTodo
            onSave={this.handleSave}
            placeholder="What needs to be done?"
          />
        </p>
      </div>
    );
  }
}

App.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default App;
