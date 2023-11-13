import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
//import Counter from './features/counter/Counter'

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
     {/*  <Counter/>*/}  
       <Navbar/> 
        </div>
      </Router>
     
    </Provider>
  );
}

export default App;
