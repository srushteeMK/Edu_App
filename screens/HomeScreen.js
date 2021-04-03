import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
    Alert,
    Modal,
    ScrollView,
    KeyboardAvoidingView,
    FlatList
  } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        emailId:firebase.auth().currentUser.email,
        selectedSubjects:[],
    };
  }
  componentDidMount=()=>{
      db.collection('users').where('email_id','==',this.state.emailId).get()
      .then((snapshot)=>{
          snapshot.forEach((doc)=>{
              this.setState({
                  selectedSubjects:doc.data().selectedSubjects
              })
          })
      })
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <MyHeader
          title = 'Selected Subjects'
          navigation ={this.props.navigation}
          />
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={this.state.selectedSubjects}
            horizontal={false}
            numColumns={5}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    style={[styles.card, { backgroundColor: item.color }]}
                    onPress={() => {
                      this.props.navigation.navigate(item.title,{details:item})
                      console.log(item)
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
           
        </View>
        </SafeAreaProvider>
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

export default HomeScreen;
