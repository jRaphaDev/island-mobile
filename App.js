import React from 'react';
import { Home } from './components/Home';
import { Commerce } from './components/Commerce';
import {createDrawerNavigator} from 'react-navigation';

import Drawer from 'react-native-drawer'
import { SideMenu } from './components/SideMenu';

import {
  createStackNavigator,
} from 'react-navigation';


export class App extends React.Component {

  constructor(){
    super();
  }
  
  render() {

    closeDrawer = () => {
      this.drawer._root.close()
    };

    openDrawer = () => {
      this.drawer._root.open()
    };

    return (
      <RootStack screenProps={this.props} />
    );
  }
}

const RootStack = createStackNavigator(
  { 
    Home: { screen: Home },
    Commerce: { screen: Commerce }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: null,
    }
  }
);


export default createDrawerNavigator({
    Home: { screen: Home },
    Restaurantes: { screen: Commerce }
}, {
    drawerWidth: 280,
});