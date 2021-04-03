import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomSideBarMenu from './CustomSideBarMenu';
import HomeScreen from '../screens/HomeScreen';
import {AppStackNavigator} from './AppStackNavigator';
 const DrawerNavigator = createDrawerNavigator({
  Stack :{
    screen: AppStackNavigator
  },
  Notification:{
    screen:NotificationsScreen
  },
  Settings:{
    screen:SettingsScreen
  }
},
{
  contentComponent:CustomSideBarMenu
},
{initialRouteName:'Stack'}
)

export default DrawerNavigator;
