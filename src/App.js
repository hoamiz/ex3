import React from 'react';
import './App.css';
import { Form } from './Component/form';
import { connect } from 'react-redux';

function App(model) {
  return (
    <div className="App">
      <Form model={'login'} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  model: state.model
})
export default connect(mapStateToProps)(App);
