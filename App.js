/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

import store from './src/code/redux/store';
import WelcomeScreen from './src/code/screens/WelcomeScreen/WelcomeScreen';
import Navigator from './src/code/routeConfig/routeConfig';

const addListener = createReduxBoundAddListener("root");

const App = ({ dispatch, nav }) => {
  return (
    <Navigator 
      navigation={addNavigationHelpers({
        dispatch,
        state: nav,
        addListener
      })}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  }
}

const AppWithNavigation = connect(mapStateToProps)(App);

export default () => {
  return (
    <Provider store={store}>
      <AppWithNavigation />
    </Provider>
  )
}
