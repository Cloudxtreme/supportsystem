import React from 'react';
import {Component} from 'react';
import {Header} from './header';
//import style from './style';
//import ToolboxApp from 'react-toolbox/lib/app';

export default class App extends Component {
  render() {
    return (

      <div>
     	<Header/>
        {this.props.children}
      </div>

    );
  }
}