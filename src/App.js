import React from 'react';
import './App.css';
import Form from './Component/model/form';
import { connect } from 'react-redux';


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
