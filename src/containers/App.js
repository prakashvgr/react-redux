import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as TodoActions from '../actions';

const App = ({ todos, actions }) => (
  <div className="todoapp">
    <Header addTodo={actions.addTodo} />
  </div>
);


