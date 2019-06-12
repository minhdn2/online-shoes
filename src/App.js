import React, { Component } from 'react';

import Product from './components/Product';

import data from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products
    }
  }
  render() {
    return (
      <div>
        <header>
          <div className="navbar-fixed">
            <nav className="nav-wraper indigo">
              <div className="container">
                <a href="#" className="brand-logo">Online Shoes</a>
                <a href="#" className="sidenav-trigger" data-target="mobile-links">
                  <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-small-only">
                  <li><a href="#adidas">Adidas</a></li>
                  <li><a href="#bitis">Bitis</a></li>
                  <li><a href="#nike">Nike</a></li>
                  <li><a href="#new-balance">New Balance</a></li>
                  {/* <li>
                    <a href="#" className="btn-floating indigo darken-3 z-depth-0">
                      <i className="material-icons">notifications</i>
                    </a>
                  </li>
                  <li><span className="badge white-text pink new">5</span></li> */}
                </ul>
              </div>
            </nav>
          </div>

          <ul className="sidenav grey lighten-2" id="mobile-links">
            <li><a href="#adidas" className="sidenav-close">Adidas</a></li>
            <li><a href="#bitis" className="sidenav-close">Bitis</a></li>
            <li><a href="#nike" className="sidenav-close">Nike</a></li>
            <li><a href="#new-balance" className="sidenav-close">New Balance</a></li>
            <li><a href="#" className="sidenav-close">Login</a></li>
          </ul>
        </header>

        <div className="container">
          <div className="row">
            <Product products={this.state.products}/>

          </div>
        </div>
      </div>
    )
  }
}

export default App

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
