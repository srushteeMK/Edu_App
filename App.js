import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import SelectSubjectScreen from './screens/SelectSubjectScreen';
import HomeScreen from './screens/HomeScreen';
import DrawerNavigator from './components/DrawerNavigator';
export default class App extends Component {
  render() {
    return (
    <AppContainer/>
    )
  }
}
const SwitchNavigator=createSwitchNavigator({
  LoginScreen:LoginScreen,
  SelectSubjectScreen:SelectSubjectScreen,
 //HomeScreen:HomeScreen,
  Drawer:DrawerNavigator
})

const AppContainer=createAppContainer(SwitchNavigator)
