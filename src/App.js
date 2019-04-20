import React, { Component } from 'react';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from './component/list';
import './App.css';
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';


class App extends Component {
  render() {
    return (
      <div className="">
        <ul class="twitter" role="navigation">
    <li>Home</li>
    <li><i class="fa fa-bell-o"></i>Health</li>
    <li><i class="fa fa-envelope-o"></i>Welness</li>
    <li>
    <FontAwesomeIcon icon={faTwitter} />     
    

      </li>
    <li><form><input placeholder="search twitter"/><i class="fa fa-search"></i></form></li>
    <li><i class="fa fa-user-circle-o"></i></li>
    <li><button>tweet</button></li>
  </ul>
        <Menu/>
      </div>
    );
  }
}

export default App;
