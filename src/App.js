import React, { Component } from 'react';
import HomeSlider from "./components/HomeSlider";
import Menu from "./components/Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
              <div className="row">
                  <div className="col-md-2">
                      <Menu/>
                  </div>
                  <div className="col-md-10">
                      <HomeSlider/>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
export default App;
