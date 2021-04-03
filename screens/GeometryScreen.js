import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";
import firebase from "firebase";
import db from "../config.js";

import MyHeader from "../components/MyHeader";
import CustomButton from "../components/CustomButton";

class GeometryScreen extends Component {
  render() {
    return (
      <View>
          <MyHeader
          navigation={this.props.navigation}
          title={"ALGEBRA"}
          leftComponent={
            <Icon
              name={"arrow-left"}
              type={"feather"}
              color={"#696969"}
              onPress={() => this.props.navigation.goBack()}
            />
          }
        />
        <Text> GeometryScreen </Text>
      </View>
    )
  }
}

export default GeometryScreen