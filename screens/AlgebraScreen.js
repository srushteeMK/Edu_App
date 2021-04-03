import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import firebase from "firebase";
import db from "../config.js";

import MyHeader from "../components/MyHeader";
import CustomButton from "../components/CustomButton";

class AlgebraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: firebase.auth().currentUser.email,
      id: this.props.navigation.getParam("details")["id"],
      image: this.props.navigation.getParam("details")["image"],
      title: this.props.navigation.getParam("details")["title"],
      color: this.props.navigation.getParam("details")["color"],
      infoList:[],

    };
    this.requestRef = null;
  }
  componentDidMount=()=> {
    this.requestRef = db
      .collection(this.state.title)
     
      .onSnapshot(
        snapshot => {
          let info = [];
          snapshot.docs.map(doc => {
            let details = doc.data();
            details["doc_id"] = doc.id;
           
            info.push(details);
          });
         
          this.setState({
            infoList: info
          });
        
        },
        () => {
          this.requestRef();
        }
       
      );
     
  }
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    console.log(item)
    return (
      this.state.infoList.map((l, i) => (
        <ListItem key={i} bottomDivider>
       
          <ListItem.Content>
            <ListItem.Title>{l.random}</ListItem.Title>
            <ListItem.Subtitle>{l.doc_id}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))
     
   
     )
  }
  render() {
  
    return (
      <View>
          <MyHeader
          navigation={this.props.navigation}
          title={this.state.title}
          leftComponent={
            <Icon
              name={"arrow-left"}
              type={"feather"}
              color={"#696969"}
              onPress={() => this.props.navigation.goBack()}
            />
          }
        />
       {this.state.infoList.length === 0 ? (
          <View style={styles.emptyListContainer}>
            <Text style={styles.title}>List Of All Documents</Text>
          </View>
        ) : (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.infoList}
            renderItem={this.renderItem}
          />
        )}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20
  },
  button: {
    width: 100,
    height: 40
  },
  buttonText: {
    fontWeight: "400"
  },
  image: {
    height: 50,
    width: 50
  }
});


export default AlgebraScreen