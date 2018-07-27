import React from 'react';
import { Home } from './components/Home';
import { Commerce } from './components/Commerce';

import {
  createStackNavigator,
} from 'react-navigation';


export class App extends React.Component {
  render() {
    return (<RootStack />);
  }
}

export default RootStack = createStackNavigator(
  { 
    Home: { screen: Home },
    Commerce: { screen: Commerce }
  },
  {
    initialRouteName: 'Home'
  }
);