import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TodoTextInputs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text || ''
    }
  }

  handleBlur = e => {
    if(!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = e => {
    const text = e.target.value.trim();
    if(e.which === 13) {
      this.props.onSave(text);
      if(this.props.newTodo)
        this.setState({ text: '' });
    }
  }

  render() {
    return (
      <input
        className={classnames({
          edit: this.props.editing,
          "new-todo": this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

TodoTextInputs.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool,
  onSave: PropTypes.func.isRequired
}