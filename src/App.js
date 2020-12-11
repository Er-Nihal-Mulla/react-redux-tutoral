import React from 'react';
import {Helmet} from 'react-helmet'
import "./App.css";
import { Provider } from "react-redux";
import store from "../src/store/reducers/index"
import Users from './Users'
import Form from './store/reducers/Form';


const TITLE= "Redux-Basic"

function App() {
  return (
    <Provider store={store}>
    <Helmet>
      <title>{TITLE}</title>
    </Helmet>
    <div className="container">
    <Form/>
    <Users/>
    </div>

    </Provider>
  );
}

export default App;
