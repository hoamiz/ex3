import React from 'react';
import './App.css';
import Form from './Component/form';
import { connect } from 'react-redux';

const App = () => {
  return (
    <div className="App">
      <Form />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    model: state.model
  }
}
export default connect(mapStateToProps, null)(App);
