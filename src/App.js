import React from 'react';
import './App.css';
import Form from './Component/form';
import { connect } from 'react-redux';

const App = (state) => {
  return (
    <div className="App">
      <Form profiles={state.profiles} />
    </div>
  );
}
const mapStateToProps = state => {
  return state

}
export default connect(mapStateToProps, null)(App);
