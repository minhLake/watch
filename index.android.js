/**
 * Watch React Native App
 * https://github.com/minhLake/wacth.git
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Watch from './view/contener/Watch.js';

export default class watch extends Component {
  render() {
    return (
      <Watch></Watch>
    );
  }
}


AppRegistry.registerComponent('watch', () => watch);
