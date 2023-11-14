import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import Home from "./components/Home";
import Footer from "./components/Footer";


function App() {
  

  return (
    <Provider store={store}>
      <Router>
       
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home  />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
