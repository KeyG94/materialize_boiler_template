import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#" className="active">Link</a></li>
          </ul>
        </div>
      </nav>
      <div className="parallax-container">
        <div className="parallax first-image"></div>
        <div className="section">
          <div className="row container max-width">
            <h2 className="header">Heading text</h2>
            <h5 className="flow-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
            <h5 className="flow-text">Ut enim ad minim veniam, quis nostrud exercitation ullamc</h5>
            <a className="btn btn-text">Read More</a>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 l4">
                <h2 className="center padding-left">group</h2>
                <p className="light center">Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="col s12 l4">
                <h2 className="center padding-left">group</h2>
                <p className="light center">Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="col s12 l4">
                <h2 className="center padding-left">group</h2>
                <p className="light center">Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
          </div>
          </div>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax second-image"></div>
      </div>
      <footer className="container padding-top">
        <div className="section">
          <div className="row">
            <div className="col s12 l6">
              <h5>Footer content</h5>
              <p className="grey-text text-lighten-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, soluta veritatis
                eum cumque doloribus deleniti accusamus quidem modi ab, magnam maxime
                temporibus. Facere accusantium maxime deserunt tenetur neque dolore 
                doloribus necessitatibus.
              </p>
            </div>
            <div className="col s12 l3">
              <h5>Contact</h5>
              <ul>
                <li>
                  <a href="#" className="white-text">Link 1</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" className="white-text">Link 2</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" className="white-text">Link 3</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" className="white-text">Link 4</a>
                </li>
              </ul>
            </div>
            <div className="col s12 l3">
              <h5>Navigate</h5>
              <ul>
                <li>
                  <a href="#" className="white-text">Link 1</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" className="white-text">Link 2</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" className="white-text">Link 3</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" className="white-text">Link 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div class="footer-copyright grey-text text-lighten-2 black">
          <div className="container">
            <div className="section">
              © 2020 Copyright Text
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
