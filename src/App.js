import React from "react";
//import Navbar from "./components/Navbar";
import store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">{/* <Navbar/> */}</div>
    </Provider>
  );
}

export default App;
