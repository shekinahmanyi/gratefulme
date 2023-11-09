import React from "react";
//import Navbar from "./components/Navbar";
import store from "./app/store";
import { Provider } from "react-redux";
import Counter from './features/counter/Counter'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter/>
        {/* <Navbar/> */}
        </div>
    </Provider>
  );
}

export default App;
