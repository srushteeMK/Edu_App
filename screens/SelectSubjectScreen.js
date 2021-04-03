import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import firebase from 'firebase';
import db from '../config';

export default class SelectSubjectScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        emailId:firebase.auth().currentUser.email,
      data: [
        {
          id: 1,
          title: "Algebra",
          color: "#FF4500",
          image: "https://img.icons8.com/cute-clipart/64/000000/square-root.png",
        },
        {
          id: 2,
          title: "Geometry",
          color: "#87CEEB",
          image: "https://img.icons8.com/dusk/64/000000/impossible-shapes.png",
        },
        {
          id: 3,
          title: "Physics",
          color: "#4682B4",
          image: "https://img.icons8.com/nolan/64/physics.png",
        },
        {
          id: 4,
          title: "Biology",
          color: "#6A5ACD",
          image: "https://img.icons8.com/ios-filled/50/000000/biology-book.png",
        },
        {
          id: 5,
          title: "Chemistry",
          color: "#FF69B4",
          image: "https://img.icons8.com/bubbles/50/000000/test-tube.png",
        },
        {
          id: 6,
          title: "English",
          color: "#00BFFF",
          image: "https://img.icons8.com/ios-filled/50/000000/circled-e.png",
        },
        {
          id: 7,
          title: "Computer",
          color: "#00FFFF",
          image: "https://img.icons8.com/cotton/64/000000/computer.png",
        },
        {
          id: 8,
          title: "History",
          color: "#20B2AA",
          image: "https://img.icons8.com/plasticine/100/000000/order-history.png",
        },
        {
          id: 9,
          title: "Geography",
          color: "#191970",
          image: "https://img.icons8.com/bubbles/100/000000/geography.png",
        },
        {
          id: 10,
          title: "Economics",
          color: "#008080",
          image: "https://img.icons8.com/plasticine/100/000000/economic-improvement.png",
        },
      ],
      subjects:[]
    };
  }

  clickEventListener(item) {
 var updateSubject = this.state.subjects
 updateSubject.push(item)
 this.setState({
   subjects:updateSubject,
 })
 console.log(this.state.subjects);
  }
 updateSubjectSelected =()=>{
   db.collection('users').doc(this.state.emailId).set({
     selectedSubjects:this.state.subjects
   },
   {
     merge:true
   })
 }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity
                  style={[styles.card, { backgroundColor: item.color }]}
                  onPress={() => {
                    this.clickEventListener(item);
                  }}
                >
                  <Image
                    style={styles.cardImage}
                    source={{ uri: item.image }}
                  />
                </TouchableOpacity>

                <View style={styles.cardHeader}>
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Text style={[styles.title, { color: item.color }]}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              
              </View>
            );
          }}
        />
          <TouchableOpacity
                  style={[styles.buttonContainer, styles.doneButton]}
                  onPress={()=>{
                    this.updateSubjectSelected()
                    this.props.navigation.navigate('Home')
                  }}
                >
                  <Text style={styles.doneText}>DONE</Text>
                </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#fff",
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#fff",
  },
  listContainer: {
    alignItems: "center",
  },
  /******** card **************/
  card: {
    shadowColor: "#474747",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: "#e2e2e2",
    //flexBasis: '42%',
    width: 130,
    height: 130,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    flex: 1,
    alignSelf: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginLeft:40,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  doneButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  doneText: {
    color: "white",
  },
});
