import React from 'react';
import './App.css';
import Form from './Component/form';
import { connect } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

const App = (state) => {

  return (
    <div className="App">
      <Form profiles={state.profiles} isLogin={state.login} />
    </div>
  );
}
const mapStateToProps = state => {
  return state

}
export default connect(mapStateToProps, null)(App);
