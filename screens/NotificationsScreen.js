import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import db from "../config";
import firebase from "firebase";

import MyHeader from "../components/MyHeader";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { SafeAreaProvider } from 'react-native-safe-area-context';
class NotificationsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
        <MyHeader title="Notifications" navigation={this.props.navigation} />
        </View>
        </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upperContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  input: {
    width: "75%",
    height: 55,
    borderColor: "#6fc0b8",
    marginTop: 20
  },
  button: {
    marginTop: 20,
    backgroundColor: "#6fc0b8"
  },
  buttonTitle: {
    color: "#fff"
  }
});


export default NotificationsScreen;
