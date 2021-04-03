import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/HomeScreen";
import BiologyScreen from "../screens/BiologyScreen";
import ChemistryScreen from "../screens/ChemistryScreen";
import AlgebraScreen from "../screens/AlgebraScreen";
import ComputerScreen from "../screens/ComputerScreen";
import EconomicsScreen from "../screens/EconomicsScreen";
import EnglishScreen from "../screens/EnglishScreen";
import GeographyScreen from "../screens/GeographyScreen";
import GeometryScreen from "../screens/GeometryScreen";
import HistoryScreen from "../screens/HistoryScreen";
import PhysicsScreen from "../screens/PhysicsScreen";

export const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Algebra: {
      screen: AlgebraScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Biology: {
        screen: BiologyScreen,
        navigationOptions: {
          headerShown: false
        }
      },
      Chemistry: {
        screen: ChemistryScreen,
        navigationOptions: {
          headerShown: false
        }
      },
      Computer: {
        screen: ComputerScreen,
        navigationOptions: {
          headerShown: false
        }
      },
      Economics: {
        screen: EconomicsScreen,
        navigationOptions: {
          headerShown: false
        }
      },
      English: {
        screen: EnglishScreen,
        navigationOptions: {
          headerShown: false
        }
      },
      Geography: {
        screen: GeographyScreen,
        navigationOptions: {
          headerShown: false
        }
      },
      Geometry: {
        screen: GeometryScreen,
        navigationOptions: {
          headerShown: false
        }
      },
      History: {
        screen: HistoryScreen,
        navigationOptions: {
          headerShown: false
        }
      },
      Physics: {
        screen: PhysicsScreen,
        navigationOptions: {
          headerShown: false
        }
      },
  },
  {
    initialRouteName: "Home"
  }
);
